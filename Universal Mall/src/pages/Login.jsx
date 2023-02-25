import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers, setLogin } from "../redux/Auth/actions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const dispatch = useDispatch();
  let users = useSelector((store) => store.AuthReducer.users);
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  // with normal api
  const handleSubmit = (e) => {
    e.preventDefault();
    let check = users.find(el=> el.email === email && el.password === password);
    console.log(check);
    localStorage.setItem("userId", check.id)
    if (check) {
      toast({
        title: "Login Successfully.",
        description: ` Welcome ${email}`,
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      dispatch(setLogin);
      navigate(comingFrom, { replace: true })
    } else {
      toast({
        title: "Wrong Creadentials.",
        description: `Please register ${email}`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <div>Login</div>
  )
}
