import _ from "lodash";
export const sumData = (arr) => {
   const clonedData = _.cloneDeep(arr);   
    const result = clonedData.reduce((acc, val) => {
       Object.keys(val).forEach(key => {
          if(key !== 'Centre'){
             acc[key] += val[key];
          };
       });
       if(acc['Centre'] !== 'Total'){
         acc['Centre'] = 'Total';
      };
       return acc;
    });
    return result;
    
 };