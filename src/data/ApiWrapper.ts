
export async function login(username: string, password: string) {
  console.log(username + " " + password);
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://app.phwt.de/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      });
      console.log(username + " " + password);
      console.log(`Basic ${btoa(`${username}:${password}`)}`);

      if (!response.ok) {
        return null;
      }

      return await response.json()
}