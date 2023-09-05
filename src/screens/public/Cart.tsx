import React from 'react'
import { Box, HStack, Pressable, Text, VStack } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'

const Cart = () => {
    return (
        <Box bg={'white'} flex={'1'}>
            <ScrollView  >
                <Box mt={'2'}>

                    <HStack m={'1'} py={'2'} px={'6'} bg={'gray.100'} alignItems={'left'} rounded={'xl'}>
                        <Box bg={'#4edb86'} p={'8'} alignItems={'center'} justifyContent={'center'} rounded={'2xl'}>Image</Box>
                        <VStack ml={'6'}>
                            <Text color={'muted.700'} fontWeight={'semibold'} fontSize={'18'} textAlign={'left'}>Product Name</Text>
                            <Text my={'1'} color={'#4edb86'} fontWeight={'semibold'} fontSize={'16'} textAlign={'left'}>Category</Text>
                            <Text my={'1'} color={'muted.700'} fontWeight={'semibold'} fontSize={'16'} textAlign={'left'}>Price</Text>
                            <HStack alignItems={'center'} mt={'2'}>
                                <Box mx={'2'} borderColor={'red.200'} borderWidth={'2'} rounded={'full'} px={'2'} _text={{
                                    fontWeight: 'semibold',
                                    fontSize: '20'
                                }}>-</Box>
                                <Text fontSize={'18'}>2</Text>
                                <Box mx={'2'} borderColor={'red.200'} borderWidth={'2'} rounded={'full'} px={'2'} _text={{
                                    fontWeight: 'semibold',
                                    fontSize: '20'
                                }}>+</Box>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack m={'1'} py={'2'} px={'6'} bg={'gray.100'} alignItems={'left'} rounded={'xl'}>
                        <Box bg={'#4edb86'} p={'8'} alignItems={'center'} justifyContent={'center'} rounded={'2xl'}>Image</Box>
                        <VStack ml={'6'}>
                            <Text color={'muted.700'} fontWeight={'semibold'} fontSize={'18'} textAlign={'left'}>Product Name</Text>
                            <Text my={'1'} color={'#4edb86'} fontWeight={'semibold'} fontSize={'16'} textAlign={'left'}>Category</Text>
                            <Text my={'1'} color={'muted.700'} fontWeight={'semibold'} fontSize={'16'} textAlign={'left'}>Price</Text>
                            <HStack alignItems={'center'} mt={'2'}>
                                <Box mx={'2'} borderColor={'red.200'} borderWidth={'2'} rounded={'full'} px={'2'} _text={{
                                    fontWeight: 'semibold',
                                    fontSize: '20'
                                }}>-</Box>
                                <Text fontSize={'18'}>2</Text>
                                <Box mx={'2'} borderColor={'red.200'} borderWidth={'2'} rounded={'full'} px={'2'} _text={{
                                    fontWeight: 'semibold',
                                    fontSize: '20'
                                }}>+</Box>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack m={'1'} py={'2'} px={'6'} bg={'gray.100'} alignItems={'left'} rounded={'xl'}>
                        <Box bg={'#4edb86'} p={'8'} alignItems={'center'} justifyContent={'center'} rounded={'2xl'}>Image</Box>
                        <VStack ml={'6'}>
                            <Text color={'muted.700'} fontWeight={'semibold'} fontSize={'18'} textAlign={'left'}>Product Name</Text>
                            <Text my={'1'} color={'#4edb86'} fontWeight={'semibold'} fontSize={'16'} textAlign={'left'}>Category</Text>
                            <Text my={'1'} color={'muted.700'} fontWeight={'semibold'} fontSize={'16'} textAlign={'left'}>Price</Text>
                            <HStack alignItems={'center'} mt={'2'}>
                                <Box mx={'2'} borderColor={'red.200'} borderWidth={'2'} rounded={'full'} px={'2'} _text={{
                                    fontWeight: 'semibold',
                                    fontSize: '20'
                                }}>-</Box>
                                <Text fontSize={'18'}>2</Text>
                                <Box mx={'2'} borderColor={'red.200'} borderWidth={'2'} rounded={'full'} px={'2'} _text={{
                                    fontWeight: 'semibold',
                                    fontSize: '20'
                                }}>+</Box>
                            </HStack>
                        </VStack>
                    </HStack>


                </Box>

            </ScrollView>
            <Box mt={'4'} mx={'1'} pt={'2'} bg={'gray.100'} borderTopRadius={'20'} shadow={'4'} borderWidth={'2'} borderTopColor={'#4edb86'} borderLeftColor={'#4edb86'} borderRightColor={'#4edb86'} >
                <HStack justifyContent={'space-between'} px={'20'} py={'2'}>
                    <Text py={'2'} color={'muted.700'} fontWeight={'semibold'} fontSize={'16'}  >Sub Total</Text>
                    <Text py={'2'} color={'muted.700'} fontWeight={'semibold'} fontSize={'16'}  >$32.30</Text>
                </HStack>

                <Box bg={'gray.50'} borderTopRadius={'20'} shadow={'2'} py={'2'}>
                    <HStack justifyContent={'space-between'} px={'20'}>
                        <Text py={'2'} color={'muted.700'} fontWeight={'semibold'} fontSize={'16'} textAlign={'left'}>Total</Text>
                        <Text py={'2'} color={'muted.700'} fontWeight={'semibold'} fontSize={'16'}>$35.30</Text>
                    </HStack>
                    <Pressable>
                        <Box mx={'6'} mb={'3'} mt={'2'} py={'4'} px={'16'} rounded={'2xl'} bg={'#4edb86'} alignItems={'center'} _text={{
                            color: 'white',
                            fontWeight: 'semibold',
                            fontSize: '18'
                        }}>Buy Now</Box>
                    </Pressable>
                </Box>

            </Box>
        </Box>
    )
}

export default Cart 