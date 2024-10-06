export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return setResponseStatus(event, 200, 'succrs')
  })
  
  