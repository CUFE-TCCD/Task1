Lifetime = require('./lifetimes');
class Container {
  constructor() {
    this.registrations = new Map();
    this.singletons = new Map();
  }

  register(name, constructor, lifetime = Lifetime.Singleton, dependencies = []) {
    this.registrations.set(name, { constructor, lifetime, dependencies });
  }

  resolve(name, resolving = new Set(), requestScope = new Map()) {
    if (resolving.has(name)) {
      throw new Error(`Circular dependency detected: ${name}`);
    }

    const registration = this.registrations.get(name);
    if (!registration) {
      throw new Error(`Service '${name}' is not registered.`);
    }

    if (registration.lifetime === Lifetime.Singleton) {
      if (this.singletons.has(name)) {
        return this.singletons.get(name);
      }
      resolving.add(name);
      const instance = this.instantiate(registration, resolving, requestScope);
      this.singletons.set(name, instance);
      resolving.delete(name);
      return instance;
    }

    if (registration.lifetime === Lifetime.Scoped) {
      if (requestScope.has(name)) {
        return requestScope.get(name);
      }
      resolving.add(name);
      const instance = this.instantiate(registration, resolving, requestScope);
      requestScope.set(name, instance);
      resolving.delete(name);
      return instance;
    }

    if (registration.lifetime === Lifetime.Transient) {
      resolving.add(name);
      const instance = this.instantiate(registration, resolving, requestScope);
      resolving.delete(name);
      return instance;
    }

    throw new Error(`Unknown lifetime for service '${name}'.`);
  }

  instantiate(registration, resolving, requestScope) {
    const { constructor, dependencies } = registration;
    const resolvedDependencies = dependencies.map(dep => this.resolve(dep, resolving, requestScope));
    return new constructor(...resolvedDependencies);
  }
}

module.exports = Container;
