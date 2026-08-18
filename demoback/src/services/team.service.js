import team from '../data/team.js';

export const teamService = {
  getAll() {
    return team;
  },

  getById(id) {
    const member = team.find((m) => m.id === id);
    return member || null;
  },
};

export default teamService;