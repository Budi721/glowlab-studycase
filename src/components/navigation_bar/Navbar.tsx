import React, {isValidElement, PropsWithChildren, ReactElement} from 'react'
import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {MobileNavContent} from './MobileNavContent'

export const Template: React.FC<PropsWithChildren> = (props) => {
  const children = React.Children.toArray(props.children).filter<ReactElement>(isValidElement)
  const mobileNav = useDisclosure()
  return (
    <Flex
      py={4}
      px={{base: 4, md: 6, lg: 8}}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={useColorModeValue('md', 'none')}
      borderBottomWidth={useColorModeValue('none', '1px')}
    >
      {children.find((child) => child.type === Brand)?.props.children}

      <HStack spacing={3} display={{base: 'none', md: 'flex'}}>
        {children.find((child) => child.type === Links)?.props.children}
      </HStack>
      <Spacer/>
      <HStack spacing={3} display={{base: 'none', md: 'flex'}}>
        <Box w='320px' h='40px' >
          {children.find((child) => child.type === NavInput)?.props.children}
        </Box>
      </HStack>


      <IconButton
        display={{base: 'flex', md: 'none'}}
        size="sm"
        aria-label="Open menu"
        fontSize="20px"
        variant="ghost"
        onClick={mobileNav.onOpen}
        icon={<HamburgerIcon/>}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Stack spacing={5}>
          <Flex>{children.find((child) => child.type === Brand)?.props.children}</Flex>
          <Stack>{children.find((child) => child.type === Links)?.props.children}</Stack>
          <Stack>{children.find((child) => child.type === NavInput)?.props.children}</Stack>
          <Divider/>
          <Flex>{children.find((child) => child.type === NavInput)?.props.children}</Flex>
        </Stack>
      </MobileNavContent>
    </Flex>
  )
}

const Brand: React.FC<PropsWithChildren> = () => null
const Links: React.FC<PropsWithChildren> = () => null
const NavInput: React.FC<PropsWithChildren> = () => null

export const Navbar = Object.assign(Template, {Brand, Links, NavInput})
