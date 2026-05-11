const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export async function Log(stack, level, packageName, message) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJlMjNjc2V1MDk3OUBiZW5uZXR0LmVkdSIsImV4cCI6MTc3ODQ4MDc5NCwiaWF0IjoxNzc4NDc5ODk0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMTlhMGNiNzgtYjg2Zi00MzQyLThjMWMtNjYyNDM4OWJjMTljIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicGFydGggc2F0aWphIiwic3ViIjoiYzhiMjdkMjgtYzRlYS00Y2VlLWE5MzAtMjQyMmI0MmE5MTMxIn0sImVtYWlsIjoiZTIzY3NldTA5NzlAYmVubmV0dC5lZHUiLCJuYW1lIjoicGFydGggc2F0aWphIiwicm9sbE5vIjoiZTIzY3NldTA5NzkiLCJhY2Nlc3NDb2RlIjoiVGZEeGdyIiwiY2xpZW50SUQiOiJjOGIyN2QyOC1jNGVhLTRjZWUtYTkzMC0yNDIyYjQyYTkxMzEiLCJjbGllbnRTZWNyZXQiOiJ1QkJFRWNnRVlwcE5RR0J2In0.wBglDvuz6MSiIbMAk0ORvnASb4YlZzp_NTYiKOOa9-E";

  const body = {
    stack,
    level,
    package: packageName,
    message
  };

  try {
    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}