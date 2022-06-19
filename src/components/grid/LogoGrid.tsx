import { Box, Text, Center, Heading, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import Link from "next/link";

export const LogoGrid = () => {
  return (
    <Box as="section" py="16">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Heading fontWeight="bold" color='brand.400' mx="auto">
          Produk pilihan untuk Anda
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
        >
          <Link href={'https://shopee.co.id/Glowlabs-Gentle-Bright-Serum-(Powerful-Brightening-Skincare)-i.336869851.9070576463?sp_atk=f117f6bb-c920-4443-a0ae-957f14c3bd3a&xptdk=f117f6bb-c920-4443-a0ae-957f14c3bd3a'}>
            <Center
              _hover={{ cursor: 'pointer', bg: mode('gray.100', 'gray.700') }}
              py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
              <Box>
                <img src='product/Gentle Bright Serum.png' height={100} width={100}/>
                <Text mt={4} fontSize='12px' color='brand.900'>Gentle Bright Serum</Text>
              </Box>
            </Center>
          </Link>

          <Link href={'https://shopee.co.id/Glowlabs-Gentle-Glow-Essence-(AHA-BHA-PHA-Centella-Asiatica-Gentle-Exfoliator)-i.336869851.6374240556?sp_atk=55f3b9c4-d26f-4145-a088-7f6efe5e174d&xptdk=55f3b9c4-d26f-4145-a088-7f6efe5e174d'}>
            <Center
              _hover={{ cursor: 'pointer', bg: mode('gray.100', 'gray.700') }}
              py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
              <Box>
                <img src='product/Gentle Glow Essence.png' height={100} width={100}/>
                <Text mt={4} fontSize='12px' color='brand.900'>Gentle Glow Essence</Text>
              </Box>
            </Center>
          </Link>
          <Link href={'https://shopee.co.id/Glowlabs-Ultimate-Team-(Gentle-Glow-Essence-Probiome-Acne-Serum-Peptide-Moist)-i.336869851.8427144871?sp_atk=ed641b1d-cc45-47d5-84b4-570b5631f0c7&xptdk=ed641b1d-cc45-47d5-84b4-570b5631f0c7'}>
            <Center
              _hover={{ cursor: 'pointer', bg: mode('gray.100', 'gray.700') }}
              py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
              <Box>
                <img src='product/Glo-C Serum.png' height={100} width={100}/>
                <Text mt={4} fontSize='12px' color='brand.900'>Glo-C Serum</Text>
              </Box>
            </Center>
          </Link>
          <Link href={'https://shopee.co.id/Glowlabs-Ultimate-Team-(Gentle-Glow-Essence-Probiome-Acne-Serum-Peptide-Moist)-i.336869851.8427144871?sp_atk=ed641b1d-cc45-47d5-84b4-570b5631f0c7&xptdk=ed641b1d-cc45-47d5-84b4-570b5631f0c7'}>
            <Center
              _hover={{ cursor: 'pointer', bg: mode('gray.100', 'gray.700') }}
              py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
              <Box>
                <img src='product/Peptide Moist Jar.png' height={100} width={100}/>
                <Text mt={4} fontSize='12px' color='brand.900'>Peptide Moist Jar</Text>
              </Box>
            </Center>
          </Link>
          <Link href={'https://shopee.co.id/Glowlabs-Ultimate-Team-(Gentle-Glow-Essence-Probiome-Acne-Serum-Peptide-Moist)-i.336869851.8427144871?sp_atk=ed641b1d-cc45-47d5-84b4-570b5631f0c7&xptdk=ed641b1d-cc45-47d5-84b4-570b5631f0c7'}>
            <Center
              _hover={{ cursor: 'pointer', bg: mode('gray.100', 'gray.700') }}
              py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
              <Box>
                <img src='product/Physical Sunscreen.png' height={100} width={100}/>
                <Text mt={4} fontSize='12px' color='brand.900'>Physical Sunscreen</Text>
              </Box>
            </Center>
          </Link>
          <Link href={'https://shopee.co.id/Glowlabs-Ultimate-Team-(Gentle-Glow-Essence-Probiome-Acne-Serum-Peptide-Moist)-i.336869851.8427144871?sp_atk=ed641b1d-cc45-47d5-84b4-570b5631f0c7&xptdk=ed641b1d-cc45-47d5-84b4-570b5631f0c7'}>
            <Center
              _hover={{ cursor: 'pointer', bg: mode('gray.100', 'gray.700') }}
              py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
              <Box>
                <img src='product/Probiome Acne Serum.png' height={100} width={100}/>
                <Text mt={4} fontSize='12px' color='brand.900'>Probiome Acne Serum</Text>
              </Box>
            </Center>
          </Link>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
