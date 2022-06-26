const db = new Dexie('voting-db');
db.version(1).stores({
    elections: '++id, title, description',
    candidates: '++id, name',
    votes: '++id, candidateId',
});
db.version(2).stores({
    votes: '++id, electionId, candidateId',
});
db.version(3).stores({
    elections: '++id, title, description, maxVotes',
    candidates: '++id, name, electionId',
});
db.version(4).stores({
    votes: '++id, [electionId+candidateId]'
});