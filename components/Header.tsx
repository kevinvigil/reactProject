import Link from "next/link";
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import Image from "next/image";

const links = [
    {
        label:'Home',
        route:'/home'
    },
    {
        label:'Leave your comment',
        route:'/form'
    }
]

export default function Header() {
    return (
        <header>
            <Box bg="blue.500" py={4} px={8} color="white">
                <Flex alignItems="center">
                <Box>
                    <Image
                    src = "/favicon.ico"
                    alt = "favicon"
                    width = "50"
                    height = "50"
                    />
                </Box>
                <Spacer />
                <Text fontSize="xl">Nombre de la Página</Text>
                <Spacer />
                <Box>
                    <Flex>
                    {links.map((links) => (
                        <Text mx={4} key={links.route}>
                            <Link href={links.route}>
                                {links.label}
                            </Link>
                        </Text>
                    ))}
                    </Flex>
                </Box>
                </Flex>
            </Box>
        </header>
        
    );
}