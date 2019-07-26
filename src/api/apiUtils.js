const baseUrl = "http://localhost:3009";
export const taskUrl = `${baseUrl}/tasks`;
export const employeeUrl = `${baseUrl}/employees`;

export function getResponse(response) {
  return response.data;
}
