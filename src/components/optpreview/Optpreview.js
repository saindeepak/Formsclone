import { useState } from "react";

const Radioprev = (props) => {
  let options = props.options;
  let name = props.name;
  let handlechange = props.handlechange;

  return (
    <>
      <div onChange={handlechange}>
        {options.map((e, idx) => (
          <label key={idx}>
            <input type="radio" id={idx} name={name} value={e} />
            {e}
            <br />
          </label>
        ))}
      </div>
    </>
  );
};

const Checkprev = (props) => {
  let [check, setcheck] = useState(true);
  let options = props.options;
  let name = props.name;

  let handlechange = (e) => {
    setcheck(!check);
  };

  return (
    <>
      {options.map((e, idx) => (
        <label key={idx}>
          <input
            type="checkbox"
            id={idx}
            name={name}
            value={e}
            checked={check}
            onChange={handlechange}
          />
          {e}
          <br />
        </label>
      ))}
    </>
  );
};

const Dropprev = (props) => {
  let options = props.options;
  let name = props.name;
  let handlechange = props.handlechange;

  return (
    <>
      <select name={name} id={name} onChange={handlechange}>
        <option value="">Choose</option>
        {options.map((e, idx) => (
          <option key={idx} value={e}>
            {e}
          </option>
        ))}
      </select>
    </>
  );
};

const Dateprev = (props) => {
  let handlechange = props.handlechange;

  return (
    <>
      <label>
        Choose Date: &nbsp;
        <input type="date" onChange={handlechange} />
      </label>
    </>
  );
};

const Timeprev = (props) => {
  let handlechange = props.handlechange;

  return (
    <>
      <label>
        Choose Time: &nbsp;
        <input type="time" onChange={handlechange} />
      </label>
    </>
  );
};

const Selectpreviewtype = (props) => {
  let [statechanger, setchanger] = useState("");
  let queslist = props.queslist;
  let setques = props.setques;
  let selectedprev;
  let type = props.type;
  let options = props.options;
  let id = props.name;
  let idx = queslist.findIndex((o) => o.id === id);

  let onhandlechange = (e) => {
    statechanger = e.target.value;
    setchanger(statechanger);
    queslist[idx].optans[0] = statechanger;
    setques(queslist.concat());
  };

  if (type == "radio") {
    selectedprev = (
      <Radioprev options={options} name={id} handlechange={onhandlechange} />
    );
  } else if (type == "checkbox") {
    selectedprev = (
      <Checkprev options={options} name={id} handlechange={onhandlechange} />
    );
  } else if (type == "dropdown") {
    selectedprev = (
      <Dropprev options={options} name={id} handlechange={onhandlechange} />
    );
  } else if (type == "date") {
    selectedprev = <Dateprev name={id} handlechange={onhandlechange} />;
  } else {
    selectedprev = <Timeprev name={id} handlechange={onhandlechange} />;
  }

  return <>{selectedprev}</>;
};

export default Selectpreviewtype;
