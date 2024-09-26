export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const getToken = () => {
  return sessionStorage.getItem("token");
};


export const removeToken=()=>{
  return sessionStorage.clear();
}