import StepIndicator from '../step-indicator'

function PersonalInfoScreen (){
  return (
    <div>
      <StepIndicator currentStep={1} />
      {/* <h2 className="text--h2 text--light text--h2">Obtén tu <span className="text--regular text--blue">seguro ahora</span></h2>
      <p className="page__description text--light">Ingresa los datos para comenzar.</p> */}
    </div>
  );
}

export default PersonalInfoScreen;