import { storage } from "../../src/lib/storage";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const projectId = parseInt(Array.isArray(id) ? id[0] : id);
    if (isNaN(projectId)) {
      return res.status(400).json({ message: 'Invalid project ID' });
    }
    try {
      const project = await storage.getProject(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch project' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 