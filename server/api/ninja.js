export default defineEventHandler(async(event) => {
  // handle query params
//   const { name } = getQuery(event);

//   const { age} = await readBody(event);

  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=')
  console.log('data', data)
  return data
});
