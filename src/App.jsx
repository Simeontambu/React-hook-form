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
    <>
      <main className="bg-rose-950 p-10 mx-[600px]">
        <div className="py-10">
          <h1>Demo react hook form</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-2">
            <label>Nom</label>
            <input
              name="name"
              type="text"
              {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.name && <span>Ce champ est obligatoire</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Telephone</label>

            <input
              name="phone"
              type="text"
              {...register("phone", {
                required: true,
                pattern: /^[1-9]{10}$/i,
              })}
            />
            {errors.phone && (
              <span>
                Ce champ est obligatoire et doit etre un numéro de téléphone
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              name="email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Ce champ est obligatoire</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Age</label>
            <input
              name="age"
              type="number"
              {...register("age", { required: true })}
            />
            {errors.age && <span>Ce champ est obligatoire</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Genre</label>
            <select>
              <option value="female">Femme</option>
              <option value="male">Homme</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <button type="submit" className="my-5 bg-black p-2">
            Enregistrer
          </button>
        </form>
      </main>
    </>
  );
}
export default App;
