

export function convertCamelCase(camelCase: string) {
  const spacedString = camelCase.replace(/([A-Z])/g, " $1");

  return (
    spacedString.charAt(0).toUpperCase() + spacedString.slice(1).toLowerCase()
  );
}

