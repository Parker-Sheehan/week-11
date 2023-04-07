import logo from "./logo.svg";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    position: "",
    gender: "",
    height: "",
    weight: "",
    college: "",
    sprint: null,
    bench: null,
    jump: null,
  };

  const onSubmit = () => {
    console.log(values);
  };

  const formik = useFormik({ initialValues, onSubmit });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <h2></h2>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <input
          type="text"
          name="college"
          placeholder="college"
          onChange={formik.handleChange}
          value={formik.values.college}
        />
        <input
          type="text"
          name="gender"
          placeholder="gender"
          onChange={formik.handleChange}
          value={formik.values.gender}
        />
        <input
          type="number"
          name="height"
          placeholder="height (inches)"
          onChange={formik.handleChange}
          value={formik.values.height}
        />
        <input
          type="number"
          name="weight"
          placeholder="weight (lbs)"
          onChange={formik.handleChange}
          value={formik.values.weight}
        />
        <input
          type="text"
          name="position"
          placeholder="position"
          onChange={formik.handleChange}
          value={formik.values.position}
        />
        <input
          type="number"
          name="sprint"
          placeholder="Sprint (40yd)"
          onChange={formik.handleChange}
          value={formik.values.sprint}
        />
        <input
          type="number"
          name="bench"
          placeholder="Bench"
          onChange={formik.handleChange}
          value={formik.values.bench}
        />
        <input
          type="number"
          name="jump"
          placeholder="jump (inches)"
          onChange={formik.handleChange}
          value={formik.values.jump}
        />
        <button>Done!</button>
      </form>
    </div>
  );
}

export default App;

/*
-last
-first
-college
-position
-gender
-height
-weight
-sprint
-bench
-jump
*/
