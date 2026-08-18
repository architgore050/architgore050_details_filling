import teamService from '../services/team.service.js';

export const teamController = {
  getAll(req, res) {
    const team = teamService.getAll();
    res.json({ success: true, count: team.length, data: team });
  },

  getById(req, res) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, error: 'Invalid team member id' });
    }

    const member = teamService.getById(id);
    if (!member) {
      return res.status(404).json({ success: false, error: 'Team member not found' });
    }

    res.json({ success: true, data: member });
  },
};

export default teamController;