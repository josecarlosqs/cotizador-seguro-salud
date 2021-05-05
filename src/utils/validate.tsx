export function isRequired(value: any): boolean{
  return !!value;
}

export function isValidName(value: any): boolean{
  return !/[^a-zA-ZáÁàÀâÂåÅãÃäÄæÆçÇéÉèÈêÊëËíÍìÌîÎïÏñÑóÓòÒôÔøØõÕöÖßúÚùÙûÛüÜÿ\s,.]/.test(value)
}

export function isValidCellphone(value: any): boolean{
  return /^9[0-9]{8}$/.test(value);
}

export function isChecked(value: any): boolean{
  console.log(value)
  return value === 'on';
}

export function isValidDocument(value: any, type: string): boolean{
  switch(type){
    case 'DNI': return /^[0-9]{8}$/.test(value);
    case 'RUC': return /(10|20)[0-9]{9}/.test(value);
    default: return false;
  }
}