-- SELECT t.team_id, t.team_name, t.email, d.other_id, d.minimum_id, t.captain_id, t.member2_id, t.member3_id, t.member4_id, t.member5_id, t.member6_id
-- FROM team_no_foreign t
-- JOIN dup_user_ids d
-- ON d.other_id IN (t.captain_id, t.member2_id, t.member3_id, t.member4_id, t.member5_id, t.member6_id);

-- INSERT INTO registered_events OVERRIDING SYSTEM VALUE
-- SELECT * FROM registered_events_no_foreign;

-- UPDATE registered_events_no_foreign
-- SET user_id = (SELECT minimum_id FROM dup_user_ids WHERE other_id = user_id)
-- WHERE user_id IN (SELECT other_id FROM dup_user_ids);

-- INSERT INTO team (comp_year, team_id, team_name, college, captain_id, member2_id, member3_id, member4_id, member5_id, member6_id, email) OVERRIDING SYSTEM VALUE VALUES
-- (2015, 50, 'Missing_Team', 'UC Davis', 0, 0, 0, 0, 0, 0, 'test@test.com');

-- UPDATE team_no_foreign
-- SET 
--   captain_id = CASE WHEN d.other_id = team_no_foreign.captain_id THEN d.minimum_id ELSE team_no_foreign.captain_id END,
--   member2_id = CASE WHEN d.other_id = team_no_foreign.member2_id THEN d.minimum_id ELSE team_no_foreign.member2_id END,
--   member3_id = CASE WHEN d.other_id = team_no_foreign.member3_id THEN d.minimum_id ELSE team_no_foreign.member3_id END,
--   member4_id = CASE WHEN d.other_id = team_no_foreign.member4_id THEN d.minimum_id ELSE team_no_foreign.member4_id END,
--   member5_id = CASE WHEN d.other_id = team_no_foreign.member5_id THEN d.minimum_id ELSE team_no_foreign.member5_id END,
--   member6_id = CASE WHEN d.other_id = team_no_foreign.member6_id THEN d.minimum_id ELSE team_no_foreign.member6_id END
-- FROM dup_user_ids d
-- RETURNING *;

-- UPDATE team_no_foreign
-- SET captain_id = (SELECT minimum_id FROM dup_user_ids WHERE other_id = captain_id)
-- WHERE captain_id IN (SELECT other_id FROM dup_user_ids);

-- UPDATE team_no_foreign
-- SET member2_id = (SELECT minimum_id FROM dup_user_ids WHERE other_id = member2_id)
-- WHERE member2_id IN (SELECT other_id FROM dup_user_ids);

-- UPDATE team_no_foreign
-- SET member3_id = (SELECT minimum_id FROM dup_user_ids WHERE other_id = member3_id)
-- WHERE member3_id IN (SELECT other_id FROM dup_user_ids);

-- UPDATE team_no_foreign
-- SET member4_id = (SELECT minimum_id FROM dup_user_ids WHERE other_id = member4_id)
-- WHERE member4_id IN (SELECT other_id FROM dup_user_ids);

-- UPDATE team_no_foreign
-- SET member5_id = (SELECT minimum_id FROM dup_user_ids WHERE other_id = member5_id)
-- WHERE member5_id IN (SELECT other_id FROM dup_user_ids);

-- UPDATE team_no_foreign
-- SET member6_id = (SELECT minimum_id FROM dup_user_ids WHERE other_id = member6_id)
-- WHERE member6_id IN (SELECT other_id FROM dup_user_ids);

UPDATE blog_post
SET post_content = REPLACE(post_content, '\n', '<br />')
WHERE post_content LIKE '%\n%';


-- EXPLAIN ANALYZE SELECT * FROM user_account;