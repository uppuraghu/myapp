import { motion } from 'framer-motion';
import { Input, Box, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { loading, error, login } = useLogin();

  const handleLogin = () => {
    login(inputs); // Call the login function with user inputs
  };

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
        placeholder='Password'
        fontSize={14}
        type='password'
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
        isLoading={loading}
        onClick={handleLogin} // Attach the login handler
      >
        Login
      </MotionButton>
    </>
  );
};

export default Login;
