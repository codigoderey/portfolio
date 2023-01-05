// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import Cors from "cors"
const cors = Cors({
  methods: ["GET", "HEAD"]
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async (req, res) => {
  try {

    await runMiddleware(req, res, cors)

    const { data } = await axios.get("https://www.javascriptes.com/api/blog")

    res.status(200).send(data)

  } catch (error) {
    console.error(error)
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};