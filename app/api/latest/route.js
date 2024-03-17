export async function GET(request) {
  // console.log(request.nextUrl.searchParams.get("symbol"));
  const inputValue = request.nextUrl.searchParams.get("symbol");
  try {
    // const { searchParams } = request.nextUrl.searchParams;

    const response = await fetch(
      `https://jdktzejo4f.execute-api.ap-southeast-2.amazonaws.com/prod/latest?symbol=${encodeURIComponent(
        inputValue
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    // console.log(data);
    return Response.json({ data });
  } catch (error) {
    console.error(error);
    return null;
  }
}
