import { Box, Flex, Text, useToast } from '@chakra-ui/react';
import { MotionLayout } from '../components/MotionLayout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import soundFile from '../utils/bip.mp3';

export default function Dashboard() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [vueltas, setVueltas] = useState(0);
  const [descansos, setDescansos] = useState(0);
  const [preparacion, setPreparacion] = useState(5);
  const router = useRouter();
  const data = router.query;
  // console.log(data);
  const META = data.vueltas;

  const toast = useToast();

  function handleToast(title) {
    return {
      position: 'top',
      title: title,
      containerStyle: {
        width: 'md',
        maxWidth: '100%',
      },
    };
  }

  useEffect(() => {
    const handleRest = () => {
      if (minutos == data.minutos && segundos == 0) {
        setVueltas((prev) => prev + 1);
        playSound();
        const data = handleToast('DESCANSO!');
        toast(data);
      }
      if (minutos == +data.descanso + +data.minutos && segundos == 0) {
        setMinutos(0);
        setDescansos((prev) => prev + 1);
        playSound();
        const data = handleToast('A SALTAR!');
        toast(data);
      }
    };

    const timerID = setTimeout(() => {
      if (preparacion > 0) {
        setPreparacion((prevPreparacion) => prevPreparacion - 1);
      } else if (segundos >= 59) {
        setSegundos(0);
        setMinutos((prevMinutos) => prevMinutos + 1);
      } else {
        setSegundos((prevsegundos) => prevsegundos + 1);
      }
    }, 1000);

    const playSound = () => {
      const audio = new Audio(soundFile);
      audio.play();
      audio.volume = 1;
    };

    handleRest();

    return () => {
      clearTimeout(timerID);
    };
  }, [
    segundos,
    minutos,
    router,
    data.minutos,
    data.descanso,
    toast,
    preparacion,
  ]);

  const handleRedirect = () => {
    if (vueltas == data.vueltas) {
      router.push('/success');
    }
  };
  handleRedirect();
  return (
    <>
      <MotionLayout>
        <Flex
          h="100vh"
          justifyContent="center"
          alignItems="center"
          w="full"
          flexDirection="column"
        >
          {preparacion > 0 ? (
            <Flex flexDirection="column">
              <Text fontSize="2xl" fontWeight="bold">
                Listo?
              </Text>
              <Box fontSize="8xl">{preparacion}</Box>
            </Flex>
          ) : (
            <>
              <Box fontSize="8xl">
                {`${minutos.toString().padStart(2, '0')}:${segundos
                  .toString()
                  .padStart(2, '0')}`}
              </Box>
              <Box fontSize="2xl" fontWeight="semibold">
                Contador de vueltas: {vueltas}
              </Box>
              <Box fontSize="2xl" fontWeight="semibold">
                Descansos: {descansos}
              </Box>
              <Box fontSize="2xl" fontWeight="semibold">
                Meta de vueltas: {META}
              </Box>
            </>
          )}
        </Flex>
      </MotionLayout>
    </>
  );
}
