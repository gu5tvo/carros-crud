//*id *placa *chassi *renavam *modelo *marca *ano 
const yup = require('yup');

const carSchema = yup.object().shape({
  id: yup.number().required(),
  placa: yup.string().required().length(7),
  chassi: yup.string().required().length(17),
  renavam: yup.number().required().length(11),
  modelo: yup.string().required().max(50),
  marca: yup.string().required().max(50),
  ano: yup.number().required().length(4),
});

export default carSchema;


