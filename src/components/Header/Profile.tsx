import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfilePros {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfilePros) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jefferson Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            jefferson14489@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Jefferson Ferreira"
        src="https://github.com/stringercj12.png"
      />
    </Flex>
  );
}
