   const  required = (propertyType: any) => {
        return (v: string) =>
          (v && v.length > 0) || `You must input a ${propertyType}`
      };
  const     minLength = (propertyType: string, minLength: number) => {
        return (v: string) =>
          (v && v.length >= minLength) ||
          `${propertyType} must be less then ${minLength} characters`
      }


export default { required, minLength};