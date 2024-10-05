import { motion } from 'framer-motion';
import { Alert, AlertIcon, Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    fullname: '',
    username: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignUpWithEmailAndPassword();  

  return (
    <>
      <MotionBox
        as={Input}
        placeholder='Email'
        fontSize={14}
        type='email'
        variant="outline"
        borderColor="whiteAlpha.400"
        _placeholder={{ color: 'whiteAlpha.600' }}
        color="white"
        focusBorderColor="blue.300"
        whileHover={{ scale: 1.02 }}
        transition="all 0.2s ease-in-out"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <MotionBox
        as={Input}
        placeholder='Username'
        fontSize={14}
        type='text'
        variant="outline"
        borderColor="whiteAlpha.400"
        _placeholder={{ color: 'whiteAlpha.600' }}
        color="white"
        focusBorderColor="blue.300"
        whileHover={{ scale: 1.02 }}
        transition="all 0.2s ease-in-out"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />

      <MotionBox
        as={Input}
        placeholder='Full Name'
        fontSize={14}
        type='text'
        variant="outline"
        borderColor="whiteAlpha.400"
        _placeholder={{ color: 'whiteAlpha.600' }}
        color="white"
        focusBorderColor="blue.300"
        whileHover={{ scale: 1.02 }}
        transition="all 0.2s ease-in-out"
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />

      <InputGroup>
        <MotionBox
          as={Input}
          placeholder='Password'
          fontSize={14}
          type={showPassword ? "text" : "password"}
          variant="outline"
          borderColor="whiteAlpha.400"
          _placeholder={{ color: 'whiteAlpha.600' }}
          color="white"
          focusBorderColor="blue.300"
          whileHover={{ scale: 1.02 }}
          transition="all 0.2s ease-in-out"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status='error' fontSize={12} p={2} borderRadius={5}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <MotionButton
        width="full"
        colorScheme='blue'
        size="lg"
        fontSize={16}
        borderRadius="md"
        boxShadow="md"
        _hover={{ boxShadow: 'lg', scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => signup(inputs)}
        isLoading={loading}
      >
        Sign Up
      </MotionButton>
    </>
  );
};

export default Signup;
