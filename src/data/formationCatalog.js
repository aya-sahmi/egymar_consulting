const categories = {
  general: 'Formations générales / transversales',
  iso9001: 'ISO 9001 — Système de management de la qualité',
  iso17025: 'ISO/CEI 17025 — Laboratoires d’étalonnage et d’essais',
  iso17020: 'ISO/CEI 17020 — Organismes d’inspection',
  products: 'Certification produits et marque NM (BTP)',
  complementary: 'Formations métiers / complémentaires'
}

const item = (code, title, category, audience, duration, objective) => ({ code, title, category, audience, duration, objective, description: objective, format: 'Présentiel ou à distance, en intra ou inter-entreprises', status: 'published' })

export const formationCatalog = [
  item('F-GT1', 'Sensibilisation aux systèmes de management ISO', categories.general, 'Direction, encadrement, nouveaux collaborateurs', '0,5 à 1 jour', 'Comprendre les enjeux et principes d’un système de management'),
  item('F-GT2', 'Approche processus et amélioration continue (PDCA)', categories.general, 'Pilotes de processus, managers qualité', '1 jour', 'Cartographier les processus et piloter la performance'),
  item('F-GT3', 'Analyse et gestion des risques (ISO 31000 / approche par les risques)', categories.general, 'Managers qualité, direction', '1 jour', 'Identifier, évaluer et traiter les risques et opportunités'),
  item('F-GT4', 'Rédaction de documents qualité (procédures, modes opératoires)', categories.general, 'Référents qualité', '1 jour', 'Structurer une documentation claire et conforme'),
  item('F-SM01', 'Comprendre et interpréter l’ISO 9001:2015', categories.iso9001, 'Managers qualité, comité de direction', '1 à 2 jours', 'Maîtriser les exigences de la norme'),
  item('F-SM02', 'Mise en œuvre d’un SMQ ISO 9001', categories.iso9001, 'Responsables qualité, chefs de projet', '2 à 3 jours', 'Construire et déployer un système documentaire complet'),
  item('F-SM03', 'Formation d’auditeurs internes ISO 9001', categories.iso9001, 'Auditeurs internes désignés', '2 jours', 'Savoir préparer, mener et conclure un audit interne'),
  item('F-SM04', 'Préparation à l’audit de certification ISO 9001', categories.iso9001, 'Équipe de direction, référents qualité', '1 jour', 'Se préparer efficacement au passage devant l’organisme certificateur'),
  item('F-LE 01', 'Interprétation de l’ISO/CEI 17025:2017', categories.iso17025, 'Responsables qualité laboratoire, techniciens', '2 jours', 'Maîtriser les exigences générales, techniques et de management'),
  item('F-LE 02', 'Métrologie et incertitudes de mesure', categories.iso17025, 'Techniciens, métrologues', '2 jours', 'Calculer et exprimer les incertitudes de mesure'),
  item('F-LE 03', 'Validation et vérification des méthodes d’essai/étalonnage', categories.iso17025, 'Responsables techniques', '1 à 2 jours', 'Garantir la fiabilité des méthodes utilisées'),
  item('F-LE 04', 'Impartialité, confidentialité et gestion des risques au laboratoire', categories.iso17025, 'Direction, personnel de laboratoire', '1 jour', 'Répondre aux exigences d’indépendance du référentiel'),
  item('F-LE 05', 'Formation d’auditeurs internes ISO 17025', categories.iso17025, 'Auditeurs internes', '2 jours', 'Auditer un laboratoire selon les exigences COFRAC'),
  item('F-LE 06', 'Préparation à l’accréditation', categories.iso17025, 'Équipe de direction, référents qualité', '1 à 2 jours', 'Anticiper les attendus de l’évaluation d’accréditation'),
  item('F-OI 01', 'Interprétation de l’ISO/CEI 17020:2012', categories.iso17020, 'Responsables qualité, inspecteurs', '2 jours', 'Maîtriser les exigences applicables aux organismes d’inspection'),
  item('F-OI 02', 'Impartialité et indépendance de l’organisme d’inspection', categories.iso17020, 'Direction, inspecteurs', '1 jour', 'Garantir la conformité aux exigences d’impartialité'),
  item('F-OI 03', 'Formation d’auditeurs internes ISO 17020', categories.iso17020, 'Auditeurs internes', '2 jours', 'Réaliser des audits internes conformes au référentiel'),
  item('F-OI 04', 'Préparation à l’accréditation (inspection)', categories.iso17020, 'Direction, responsables qualité', '1 à 2 jours', 'Se préparer à l’évaluation d’accréditation'),
  item('F-CP 01', 'Cadre réglementaire et normatif', categories.products, 'Directions, responsables qualité', '1 jour', 'Connaître le cadre réglementaire marocain'),
  item('F-CP 02', 'Système de management de la qualité', categories.products, 'Responsables qualité, chefs de projet', '2 jours', 'Connaître les exigences de la norme ISO 9001'),
  item('F-CP 03', 'Exigences techniques produits BTP', categories.products, 'Responsables techniques, chefs de projet', '2 jours', 'Caractéristiques et essais spécifiques par famille de produits'),
  item(null, 'Habilitation et qualification du personnel technique', categories.complementary, 'Personnel technique et responsables qualité', '1 jour', 'Structurer l’habilitation et la qualification des compétences'),
  item(null, 'Gestion des équipements et étalonnage interne', categories.complementary, 'Techniciens, responsables techniques', '1 à 2 jours', 'Maîtriser le suivi des équipements et des étalonnages'),
  item(null, 'Traitement des réclamations et non-conformités', categories.complementary, 'Managers, référents qualité', '1 jour', 'Traiter les écarts et améliorer la satisfaction client'),
  item(null, 'Communication et reporting client (spécifique laboratoires/inspection)', categories.complementary, 'Équipes laboratoires et inspection', '1 jour', 'Produire une communication client claire et fiable'),
  item(null, 'Certification ISO 45001 ou ISO 14001', categories.complementary, 'Managers qualité, HSE, direction', '2 jours', 'Comprendre les principes d’un système santé-sécurité ou environnement'),
  item(null, 'Essais de laboratoire (secteur BTP)', categories.complementary, 'Techniciens et responsables de laboratoire', '2 jours', 'Renforcer la maîtrise des essais appliqués au secteur BTP'),
  item(null, 'Sauveteur secouriste du travail', categories.complementary, 'Salariés et équipes opérationnelles', '2 jours', 'Réagir efficacement face aux situations d’urgence'),
  item(null, 'Risques sécurité et EPI', categories.complementary, 'Personnel exposé et encadrement', '1 jour', 'Prévenir les risques et choisir les équipements adaptés'),
  item(null, 'Sécurité incendie et évacuation', categories.complementary, 'Personnel et équipes d’évacuation', '1 jour', 'Prévenir les incendies et organiser une évacuation efficace')
]

export const formationCategories = Object.values(categories)
