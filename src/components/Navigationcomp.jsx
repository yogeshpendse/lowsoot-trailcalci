export function Navigationcomp({ gotoNext, gotoPrev, state, lengthkeys }) {
  return (
    <>
      <div className="navigationcomp">
        <div className="navigationcomp__buttons">
          <button
            className="btn__navigate btn__navigate--fill"
            disabled={state < 1 ? true : false}
            onClick={gotoPrev}
          >
            <i className="bi bi-arrow-up" />
          </button>
          <button
            className="btn__navigate btn__navigate--fill"
            disabled={state < lengthkeys - 1 ? false : true}
            onClick={gotoNext}
          >
            <i className="bi bi-arrow-down" />
          </button>
        </div>
      </div>
    </>
  );
}
