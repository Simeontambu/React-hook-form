import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "18",
    gender: "",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(`${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nom</label>
        <input
          name="name"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <span>erreur</span>}
      </div>
      <div>
        <label>Telephone</label>
        11:15
        <input name="phone" type="text" />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="email" />
      </div>
      <div>
        <label>Age</label>
        <input name="age" type="number" />
      </div>
      <div>
        <label>Genre</label>
        <select>
          <option value="female">Femme</option>
          <option value="male">Homme</option>
          <option value="other">Autre</option>
        </select>
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
}
export default App;
