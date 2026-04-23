//function to handle the post request of the from
const PostData = async (email) => {

  const response = await fetch('https://formsubmit.co/ajax/ochihecheemmanuel1@gmail.com', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email })
  });
  // get status data
  const data = await response.json();
  // check if the status  is no 200
  if (!response.ok) {
    throw new Error(data.message || 'Could not send request.');
  }
  return data;

}

export default PostData;
