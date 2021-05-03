import {
  useHistory
} from "react-router-dom";
import PropTypes, { InferProps } from "prop-types";

function StepIndicator ({currentStep}: InferProps<typeof StepIndicator.propTypes>) {
  const history = useHistory();

  return (
    <p className="page__step-indicator">
      <button className="page__goback-button" onClick={history.goBack} />
      <span className="text--blue">Paso {currentStep}</span> de 7
    </p>
  )
}

StepIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired
};

export default StepIndicator;