export const DEFAULT_AGENT_UID = 123456;
export const AGENT_UIDS = [1001, 1002, 1003, 9000, 123456];

export function isAgentUid(uid: string | number | undefined | null, candidateUid?: string | number): boolean {
  if (uid === undefined || uid === null) return false;
  if (candidateUid !== undefined && String(uid) === String(candidateUid)) return false;
  const num = Number(uid);
  return AGENT_UIDS.includes(num) || (candidateUid !== undefined && String(uid) !== String(candidateUid));
}

