import React from 'react'
import { Box, Divider, HStack, Image, ScrollView, Text, VStack } from 'native-base'
import {IMAGES} from '../../assets'

const ProductDetails = ({ route }:any) => {
  const item = route.params.data;

  return (
    <Box h={'full'}>
      
      <ScrollView h={'full'}>

        <Box shadow={'1'} bg={'#f5f7f6'} borderBottomRadius={'3xl'}>

          {/* image box  */}

          <VStack mt={'1'}>
            <HStack py={'6'} justifyContent={'space-between'} mx={'6'}>
              <HStack justifyContent={'space-around'}>
                <Box shadow={'1'} bg={'#f5f7f5'} py={'0.5'} px={'2'} rounded={'md'} mr={'2'} alignItems={'center'} justifyContent={'center'}>
                  <Image source={{
                    uri: `${item.image}`
                  }} alt="Alternate Text" size="8" />
                </Box>
                <Box shadow={'1'} bg={'#f5f7f5'} py={'0.5'} px={'2'} rounded={'md'} mr={'2'} alignItems={'center'} justifyContent={'center'}>
                  <Image source={{
                    uri: `${item.image}`
                  }} alt="Alternate Text" size="8" />
                </Box>
                <Box shadow={'1'} bg={'#f5f7f5'} py={'0.5'} px={'0.5'} rounded={'md'} mr={'2'} alignItems={'center'} justifyContent={'center'}>
                  <Image source={{
                    uri: `${item.image}`
                  }} alt="Alternate Text" size="8" />
                </Box>
                <Box shadow={'1'} bg={'#f5f7f5'} py={'0.5'} px={'0.5'} rounded={'md'} mr={'2'} alignItems={'center'} justifyContent={'center'}>
                  <Image source={{
                    uri: `${item.image}`
                  }} alt="Alternate Text" size="8" />
                </Box>

              </HStack>
              <Box
                mr={'2'}
                p={'3'}
                borderWidth="2"
                borderColor="gray.200"
                borderRadius={'full'}>
                <Image
                  source={IMAGES.MENU}
                  alt="Menu"
                  size="6"
                />
              </Box>
            </HStack>
            <Box alignItems={'center'} bg={'#f5f7f6'} mb={'8'} py={'4'}>
              <Image source={{
                uri: `${item.image}`
              }} alt="Alternate Text" size="xl" />
            </Box>
          </VStack>
        </Box>

        {/* image details  */}
        <Text mt={'2'} ml={'4'} fontSize={'16'} color={'#4edb86'} fontWeight={'semibold'}>{item.category}</Text>
        <HStack mt={'1'} mx={'4'}>
          <VStack w={'85%'}>

            <Box _text={{
              fontSize: '20',
              color: 'muted.600',
              fontWeight: 'semibold'
            }}>{item.title}</Box>
          </VStack>
          <Box mr={'2'} alignItems={'center'} justifyContent={'center'}>
            <Box p={'3'} mr={'2'} bg={'#4edb86'} rounded={'2xl'}>
              <Image
                source={IMAGES.CART}
                alt="Menu"
                size="7"
              />
            </Box></Box>

        </HStack>



        <VStack mx={'4'}>
          <HStack mt={'2'}>
            <Image
              source={IMAGES.THUMBS}
              alt="Menu"
              size="5"
            />
            <Box ml={'2'} _text={{
              fontSize: '15',
            }}>86% </Box>
            <Box _text={{
              fontSize: '15',
              color: 'muted.300',
              fontWeight: 'semibold'
            }}>(120) recommended this</Box>
          </HStack>
          <HStack mt={'1'} >
            <Image
              source={IMAGES.STAR}
              alt="Menu"
              size="5"
            />
            <Box ml={'2'} _text={{
              fontSize: '15',
            }}>{item.rating.rate} </Box>
            <Text ml={'2'} fontSize={'15'} color={'muted.300'} fontWeight={'semibold'}>{item.rating.count} reviews</Text>
          </HStack>




          <Box _text={{
            fontSize: '20',
            fontWeight: 'semibold'
          }}>Description</Box>
          <Box>
            <Box mt={'1'} _text={{
              color: 'muted.300',
              fontWeight: 'semibold'
            }}>{item.description}</Box>
          </Box>
          <Box mb={'1'} _text={{
            color: '#4edb86'
          }}>More Details</Box>
        </VStack>


        <VStack mx={'4'}>
          <Divider my="2" _light={{
            bg: "muted.300"
          }} _dark={{
            bg: "muted.50"
          }} />

          <HStack alignItems={'center'} justifyContent={'space-between'} mx={'4'}>
            <HStack alignItems={'center'}>
              <Image
                source={IMAGES.BAR}
                alt="Menu"
                size="5"
              />
              <Box alignItems={'center'} ml={'2'} _text={{
                fontSize: '16',
                fontWeight: 'semibold',
                color: 'gray.500'
              }}>Specification</Box>
            </HStack>
            <HStack alignItems={'center'}>
              <Box alignItems={'center'} justifyContent={'center'} _text={{
                fontWeight: 'bold',
                fontSize: '22',
                color: 'muted.400'
              }}> &#x3e;</Box>
            </HStack>

          </HStack>

          <Divider my="2" _light={{
            bg: "muted.300"
          }} _dark={{
            bg: "muted.50"
          }} />

          <HStack alignItems={'center'} justifyContent={'space-between'} mx={'4'}>
            <HStack alignItems={'center'}>
              <Image
                source={IMAGES.LINES}
                alt="Menu"
                size="5"
              />
              <Box alignItems={'center'} ml={'2'} _text={{
                fontSize: '16',
                fontWeight: 'semibold',
                color: 'gray.500'
              }}>reviews</Box>
            </HStack>
            <HStack alignItems={'center'}>
              {/* <Box mr={'2'} _text={{
                  fontSize: '16',
                  fontWeight: 'semibold',
                  color: '#4edb86'
                }}>{item.rating.count} reviews</Box> */}
              <Text mr={'2'} fontSize={'16'} color={'#4edb86'} fontWeight={'semibold'}>{item.rating.count} reviews</Text>
              <Box alignItems={'center'} justifyContent={'center'} _text={{
                fontWeight: 'bold',
                fontSize: '22',
                color: 'muted.400'
              }}> &#x3e;</Box>
            </HStack>

          </HStack>

          <Divider my="2" _light={{
            bg: "muted.300"
          }} _dark={{
            bg: "muted.50"
          }} />
        </VStack>

        

      </ScrollView>

      <Box width={'full'} ml={'2'} mr={'2'} bottom={'0'} position={'absolute'} mb={'4'} mt={'6'} >
        <HStack justifyContent={'space-between'}>

          <VStack ml={'4'} justifyContent={'center'}>
            {/* <Box alignItems={'center'} _text={{
                color: 'gray.600',
                fontSize: '22',
                fontWeight: 'semibold'
              }}>${item.price}</Box> */}
            <Text ml={'2'} fontSize={'16'} color={'#4edb86'} fontWeight={'semibold'}>₹{item.price}</Text>
            <Box alignItems={'center'} _text={{
              color: 'gray.400',
              fontSize: '15',
              fontWeight: 'semibold'
            }}>Delivery 2-3 Days</Box>
          </VStack>
          <HStack mr={'2'}>
            <Box mr={'2'} p={'3'} bg={'gray.600'} rounded={'2xl'} justifyContent={'center'} _text={{
              color: 'white',
              fontSize: '18',
              fontWeight: 'semibold'
            }}> Add To Cart</Box>
            <Box mr={'2'} p={'5'} bg={'#4edb86'} rounded={'xl'} justifyContent={'center'}>
              <Image
                source={IMAGES.MSG}
                alt="Menu"
                size="7"
              />
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductDetails