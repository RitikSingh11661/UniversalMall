// import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useToast } from "@chakra-ui/react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { auth } from "../firebase/firebaseConfig";
// import {signInWithEmailAndPassword} from "firebase/auth"

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getUsers, setLogin } from "../redux/Auth/actions";
// // import { account } from "../appwrite/appwriteConfig";

// // with firebase
// const handleSubmit=(e)=>{
//     e.preventDefault();
//     signInWithEmailAndPassword(auth,email,password)
//     .then((userCredential)=>{
//       console.log(userCredential)
//     })
//     .catch(err=>console.log(err))
//   }

//   // with appwrite
//   // const handleSubmit = async(e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await account.createEmailSession(email,password);
//   //     navigate('/')
//   //   } catch (error) {
//   //     console.log('error',error)
//   //   }
//   // };