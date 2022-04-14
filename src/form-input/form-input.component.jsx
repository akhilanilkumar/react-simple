import './form-input.component.css';

const FormInput = ({ label, ...options }) => {
  return <div>
    <label>
      <b>{label}</b>
    </label>
    <input {...options} />
  </div>;
};

export default FormInput;
