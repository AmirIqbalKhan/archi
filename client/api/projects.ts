import { storage } from "../src/lib/storage";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const projects = await storage.getProjects();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch projects' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 