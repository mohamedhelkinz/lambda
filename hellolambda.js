exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda and Github CI from branch lambdanodejs amin!"),
    }
    return response}