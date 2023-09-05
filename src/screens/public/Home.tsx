import React, {useEffect} from 'react';
import {
  Box,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
  ScrollView,
} from 'native-base';
import useSWRProduct from '../../hooks/productApi';
import { useNavigation } from '@react-navigation/native';
import {IMAGES} from '../../assets'
type productType = {

  id: number,
  image: string,
  title: string,
  price: number,
}
const Home = () => {
  const {data: categories} = useSWRProduct('/products/categories');
  const {data: spcProduct} = useSWRProduct('/products/10');
  const {data: products} = useSWRProduct('/products');

  const {navigate} = useNavigation();

  return (
    <Box bg={'white'} flex={'1'}>
      <Box>
        {/* Discover */}
        <Box mt={'4'} mx={'4'}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Box
              ml={'1'}
              _text={{
                fontSize: '4xl',
                fontWeight: 'medium',
                color: 'blueGray.600',
              }}>
              Discover
            </Box>
            <HStack mr={'1'} alignItems={'center'} justifyContent={'center'}>
              <Box
                mx={'2'}
                p={'3'}
                borderWidth="2"
                borderColor="gray.200"
                borderRadius={'full'}>
                <Image
                  source={IMAGES.BELL}
                  alt="Notification"
                  size="6"
                />
                <Box
                  right={'3'}
                  top={'2'}
                  position={'absolute'}
                  p={'1'}
                  bg={'#4edb86'}
                  rounded={'full'}></Box>
              </Box>
              <Pressable
                mr={'2'}
                p={'3'}
                borderWidth="2"
                borderColor="gray.200"
                borderRadius={'full'}
                onPress={() => navigate('Cart')}>
                <Image
                  source={IMAGES.CART}
                  alt="Menu"
                  size="6"
                />
              </Pressable>
            </HStack>
          </HStack>
        </Box>

        {/* Search box */}
        <Box mt={'6'} my={'2'} mx={'6'}>
          <HStack justifyContent={'space-between'}>
            {/* search box  */}
            <HStack
              p={3}
              bg={'#f8f9f9'}
              width={'84%'}
              borderRadius={'2xl'}
              _text={{
                fontSize: '20',
                color: 'gray.300',
                fontWeight: 'semibold',
              }}>
              <Image
                source={IMAGES.SEARCH}
                alt="search"
                size="6"
              />
              <Box
                _text={{
                  color: 'gray.300',
                  fontWeight: 'semibold',
                  fontSize: '18',
                }}>
                Search
              </Box>
            </HStack>
            
            {/* demo box */}
            <Pressable
              p={3}
              bg={'#4edb86'}
              width={'14%'}
              borderRadius={'2xl'}
              alignItems={'center'}
              onPress={() => {
                navigate('Chat');
              }}
            >
              <Box
                left={'3'}
                top={'3'}
                position={'absolute'}
                p={'1/5'}
                bg={'white'}
                rounded={'full'}></Box>
              <Box
                right={'3'}
                top={'3'}
                position={'absolute'}
                p={'1/5'}
                bg={'white'}
                rounded={'full'}></Box>
              <Box
                left={'3'}
                bottom={'3'}
                position={'absolute'}
                p={'1/5'}
                bg={'white'}
                rounded={'full'}></Box>
              <Box
                right={'3'}
                bottom={'3'}
                position={'absolute'}
                p={'1/5'}
                bg={'white'}
                rounded={'full'}></Box>
            </Pressable>
          </HStack>
        </Box>

        {/* category list   */}
        <Box mt={'6'} ml={'5'}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories &&
              categories.map((item: string) => (
                <Box
                  mx={'1'}
                  py={'3'}
                  px={'4'}
                  borderRadius={'2xl'}
                  borderWidth="2"
                  borderColor="gray.100"
                  bg={'white'}
                  _text={{
                    fontSize: '18',
                    color: 'gray.200',
                    fontWeight: 'semibold',
                  }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Box>
              ))}
          </ScrollView>
        </Box>

        {/* special product   */}
        <Box mx={'6'} mt={'6'} bg={'gray.100'} rounded={'2xl'}>
          {spcProduct && (
            <HStack justifyContent={'space-evenly'}>
              <VStack>
                <Box
                  mt={'5'}
                  _text={{
                    color: '#4edb86',
                    fontWeight: 'medium',
                    fontSize: '18',
                  }}>
                  Advancement
                </Box>
                <Box
                  mt={'1'}
                  _text={{
                    fontWeight: 'medium',
                    fontSize: '22',
                  }}>
                  {spcProduct.title.slice(0, 12)}
                  {/* PlayStation 5 */}
                </Box>
                <HStack
                  my={'6'}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Box
                    mx={'3'}
                    rounded={'xl'}
                    py={'2'}
                    px={'5'}
                    bg={'#4edb86'}
                    _text={{
                      fontSize: '19',
                      fontWeight: 'semibold',
                      color: 'white',
                    }}>
                    Buy
                  </Box>
                  <Text
                    fontWeight={'semibold'}
                    fontSize={'20'}
                    color={'gray.700'}>
                    ${spcProduct.price}
                    {/* $1122 */}
                  </Text>
                </HStack>
              </VStack>
              <Box
                alignItems={'center'}
                my={'3'}
                rounded={'xl'}
                justifyContent={'center'}>
                <Image
                  source={{
                    uri: `${spcProduct.image}`,
                  }}
                  alt="Alternate Text"
                  size="xl"
                />
              </Box>
            </HStack>
          )}
        </Box>

        {/* product list   */}
        <FlatList
          mx={'4'}
          mt={'1'}
          numColumns={2}
          data={products}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({item}:{item:productType}) => (
            <Pressable
              key={item.id}
              mx={'1'}
              my={'1'}
              rounded={'xl'}
              bg={'gray.100'}
              onPress={() => {
                navigate('ProductDetails', {data: item});
              }}>
              <Box
                mx={'10'}
                mt={'6'}
                mb={'1'}
                rounded={'2xl'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Image
                  source={{
                    uri: `${item.image}`,
                  }}
                  alt="Alternate Text"
                  size="lg"
                  rounded={'md'}
                />
              </Box>
              <Box
                mt={'3'}
                _text={{
                  fontSize: '17',
                  color: 'gray.700',
                }}
                alignItems={'center'}>
                {item.title.slice(0, 12)}
              </Box>
              <Box
                mt={'1'}
                mb={'4'}
                _text={{
                  fontWeight: 'semibold',
                  fontSize: '18',
                }}
                alignItems={'center'}>
                {`₹` + item.price}
              </Box>
            </Pressable>
          )}
        />
      </Box>
    </Box>
  );
};

export default Home;
