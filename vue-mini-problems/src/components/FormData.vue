<script setup>
import { reactive } from "vue";

const formData = reactive({
  name: "",
  age: "",
  gender: "",
  department: "",
  favSub: [],
});
const handleSubmit = () => {
  console.log(formData.favSub);
};
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name: </label>
      <input type="text" v-model="formData.name" />
      <label for="age">Age: </label>
      <input type="number" v-model="formData.age" />
      <label for="gender">Gender</label>
      <input
        type="radio"
        name="gender"
        value="male"
        v-model="formData.gender"
      />
      male
      <input
        type="radio"
        name="gender"
        value="female"
        v-model="formData.gender"
      />
      Female
      <label for="Department">Department</label>
      <select name="Department" v-model="formData.department">
        <option disabled value="">SELECT</option>
        <option value="cs">CS</option>
        <option value="ec">EC</option>
      </select>
      <label for="fav-sub">Favourite Subjects</label>
      <input
        name="fav-sub"
        v-model="formData.favSub"
        type="checkbox"
        value="English"
      />English
      <input
        name="fav-sub"
        v-model="formData.favSub"
        type="checkbox"
        value="malayalam"
      />Malayalam
      <input
        name="fav-sub"
        v-model="formData.favSub"
        type="checkbox"
        value="maths"
      />Maths
      <input
        name="fav-sub"
        v-model="formData.favSub"
        type="checkbox"
        value="chemistry"
      />Chemistry
    </form>
  </div>
</template>
