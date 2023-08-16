export const sumScores = (arr) => {
    const result = arr.map((x) => x).reduce((acc, val) => {
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