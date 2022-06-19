import {Box, Center, Input, useColorModeValue as mode} from '@chakra-ui/react'
import * as React from 'react'
import { Navbar } from './Navbar'
import { NavLink } from './NavLink'

export const NavigationBar = () => (
  <Box minH="5rem" bg={mode('gray.50', 'gray.700')}>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd="10">
          <img
            src='logo.png'
            alt='Glowlabs Logo'
            width='150'
            height='72'
          />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavLink isActive>Shop</NavLink>
        <NavLink>Features</NavLink>
      </Navbar.Links>
      <Navbar.NavInput>
        <Input variant='flushed' placeholder='Cari'/>
      </Navbar.NavInput>
    </Navbar>
  </Box>
)
