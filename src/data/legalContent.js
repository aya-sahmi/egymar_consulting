export const legalDocuments = {
  mentions: {
    title: 'Mentions légales',
    sections: [
      { title: 'Éditeur du site', blocks: [
        { type: 'parts', parts: [{ text: 'Le site ' }, { type: 'highlight', text: '[adresse du site, ex. www.egymarconsulting.ma]' }, { text: ' est édité par :\nEgyMar Consulting, société à responsabilité limitée à associé unique (SARL AU)\nSiège social : 39 2ème Etage, Bd Abderrahim Bouabid, Hay EL WAFA, Agadir, Maroc\nTéléphone : +212 666820044\nE-mail : ' }, { type: 'highlight', text: '[contact@…]' }] },
      ] },
      { title: 'Directeur de la publication', blocks: [{ type: 'p', text: "Mme Khadia Aicha, gérante d'EgyMar Consulting." }] },
      { title: 'Hébergement', highlightedTitle: true, blocks: [{ type: 'highlight', text: "Le site est hébergé par [nom de l'hébergeur], [forme juridique], [adresse complète], [pays], téléphone : [numéro], site : [adresse web]." }] },
      { title: 'Activité', blocks: [{ type: 'p', text: "EgyMar Consulting propose des prestations de formation, de conseil et d'audit dans les domaines de la qualité, de la métrologie, des laboratoires d'essais et du développement des compétences, au Maroc et à l'international, en présentiel et à distance." }] },
      { title: 'Propriété intellectuelle', blocks: [{ type: 'p', text: "L'ensemble des éléments du site (textes, logos, marques, visuels, programmes et documents téléchargeables) est la propriété exclusive d'EgyMar Consulting ou de ses partenaires." }] },
      { title: 'Limitation de responsabilité', blocks: [
        { type: 'p', text: "Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être modifiées à tout moment sans préavis. Elles ne constituent ni une offre contractuelle, ni un avis personnalisé ; seuls les devis, conventions et contrats signés engagent EgyMar Consulting." },
        { type: 'p', text: "EgyMar Consulting s'efforce d'assurer l'exactitude des informations et la disponibilité du site, mais ne peut être tenue responsable d'erreurs, d'omissions, d'interruptions ou de dommages résultant de l'utilisation du site." },
      ] },
      { title: 'Liens hypertextes', blocks: [{ type: 'p', text: "Le site peut contenir des liens vers des sites tiers. EgyMar Consulting n'exerce aucun contrôle sur leur contenu et décline toute responsabilité à leur égard. Tout lien vers le présent site doit faire l'objet d'une autorisation préalable." }] },
      { title: 'Droit applicable et juridiction', blocks: [{ type: 'p', text: "Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à l'utilisation du site relève de la compétence exclusive des tribunaux de commerce d'Agadir, sauf disposition légale impérative contraire." }] },
      { title: 'Contact', blocks: [{ type: 'parts', parts: [{ text: 'Pour toute question relative au site : ' }, { type: 'highlight', text: '[adresse e-mail].' }] }] },
    ],
    updated: 'Dernière mise à jour : 23 sept. 2026 ·',
  },
  privacy: {
    title: 'Politique de confidentialité',
    intro: "EgyMar Consulting attache une grande importance à la protection de vos données personnelles. La présente politique explique quelles données nous collectons, pourquoi, et comment exercer vos droits, conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et, lorsqu'il s'applique, au Règlement général sur la protection des données de l'Union européenne (RGPD).",
    sections: [
      { title: '1. Responsable du traitement', blocks: [{ type: 'parts', parts: [{ text: 'EgyMar Consulting, SARL AU, 39 2ème Etage, Bd Abderrahim Bouabid, Hay EL WAFA, Agadir, Maroc – Contact pour toute question relative à vos données : ' }, { type: 'highlight', text: 'donnees@.........' }] }] },
      { title: '2. Données collectées', blocks: [
        { type: 'p', text: 'Nous collectons uniquement les données que vous nous transmettez volontairement, notamment via les formulaires du site :' },
        { type: 'list', items: ['identité : nom, prénom, fonction ;', 'coordonnées : adresse e-mail, téléphone, ville, pays ;', "informations professionnelles : organisme ou entreprise, secteur d'activité ;", 'informations liées à votre demande : formation ou prestation souhaitée, message, besoins spécifiques ;'] },
        { type: 'p', text: 'Nous ne collectons aucune donnée sensible au sens de la loi 09-08.' },
      ] },
      { title: '3. Finalités et bases légales', blocks: [{ type: 'table', headers: ['Finalité', 'Base légale'], rows: [
        ['Répondre à vos demandes d\'information et de devis', 'Mesures précontractuelles à votre demande'],
        ['Gérer les inscriptions, la convocation, le suivi et l\'évaluation des formations', 'Exécution du contrat'],
        ['Délivrer les attestations et gérer la facturation', 'Exécution du contrat et obligations légales'],
        ['Vous envoyer des informations sur nos formations et événements', 'Votre consentement, retirable à tout moment'],
        ['Mesurer l\'audience et améliorer le site', 'Votre consentement (cookies)'],
        ['Assurer la sécurité du site', 'Intérêt légitime d\'EgyMar Consulting'],
      ] }] },
      { title: '4. Destinataires', blocks: [
        { type: 'p', text: 'Vos données sont destinées exclusivement à EgyMar Consulting. Elles peuvent être communiquées, dans la stricte limite nécessaire, à :' },
        { type: 'list', items: ['nos prestataires techniques (hébergement du site, outils d\'e-mailing, de formulaires, de visioconférence) ;', 'les formateurs ou consultants intervenant sur votre formation ou mission ;', 'votre employeur ou l\'organisme financeur, lorsque la formation est commandée ou financée par eux ;', 'les autorités, lorsque la loi l\'exige.'] },
        { type: 'p', text: 'Vos données ne sont jamais vendues ni louées.' },
      ] },
      { title: '5. Durée de conservation', blocks: [{ type: 'table', headers: ['Données', 'Durée de conservation'], rows: [
        ['Demandes de contact ou de devis sans suite', '3 ans à compter du dernier contact'],
        ['Dossiers de formation et de mission (inscriptions, présences, évaluations, attestations)', '5 ans après la fin de la prestation'],
        ['Documents comptables et factures', '10 ans (obligation légale)'],
        ['Abonnés aux informations commerciales', 'Jusqu\'au désabonnement'],
        ['Cookies', '13 mois maximum'],
      ] }] },
      { title: '6. Sécurité', blocks: [{ type: 'p', text: "EgyMar Consulting met en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données contre la perte, l'accès non autorisé, la modification ou la divulgation : connexion sécurisée (HTTPS), accès restreint, sauvegardes." }] },
      { title: '7. Cookies', blocks: [
        { type: 'p', text: 'Un cookie est un petit fichier déposé sur votre appareil lors de la consultation du site. Nous utilisons :' },
        { type: 'list', items: [
          'des cookies strictement nécessaires au fonctionnement du site, qui ne requièrent pas votre consentement ;',
          { type: 'parts', parts: [{ text: 'des cookies de mesure d\'audience (' }, { type: 'highlight', text: 'outil, ex. Google Analytics' }, { text: ') et, le cas échéant, des cookies publicitaires (' }, { type: 'highlight', text: 'outil, ex. pixel Meta' }, { text: '), déposés uniquement avec votre accord.' }] },
        ] },
        { type: 'p', text: 'Vous pouvez accepter, refuser ou modifier vos choix à tout moment via le lien « Gérer les cookies » en bas de page, ou en paramétrant votre navigateur.' },
      ] },
      { title: '08. Modification de la politique', blocks: [{ type: 'p', text: "EgyMar Consulting peut modifier la présente politique à tout moment, notamment pour se conformer à une évolution légale. La version en vigueur est celle publiée sur le site." }] },
    ],
    appendix: [{ title: 'Textes courts à intégrer sur le site', lines: [
      { title: 'Bandeau cookies', text: 'Nous utilisons des cookies pour assurer le bon fonctionnement du site et, avec votre accord, pour mesurer son audience. Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment. [En savoir plus]' },
      { title: 'Boutons :', text: 'Tout accepter · Tout refuser · Personnaliser' },
      { text: '(Les boutons « Tout accepter » et « Tout refuser » doivent avoir la même visibilité.)' },
      { title: 'Mention sous les formulaires de contact et de devis', text: 'Les informations recueillies sont destinées à EgyMar Consulting afin de répondre à votre demande.' },
      { text: 'HTTPS, les liens en pied de page et le fonctionnement du bandeau cookies' },
    ] }],
    updated: 'Dernière mise à jour : 23 sept. 2026 ·',
  },
  terms: {
    title: 'Conditions Générales de Vente',
    sections: [
      { title: "Article 1 – Objet et champ d'application", blocks: [
        { type: 'p', text: "Les présentes conditions générales de vente (CGV) s'appliquent à toutes les prestations de formation, de conseil et d'audit fournies par EgyMar Consulting, SARL AU, 2ème Etage N°39 , Boulevard Abderrahim Bouabid, Hay EL WAFA, Agadir, Maroc, (ci-après « EgyMar Consulting »), à tout client professionnel ou particulier, établi au Maroc ou à l'étranger (ci-après « le Client »)." },
        { type: 'p', text: "Toute commande implique l'acceptation sans réserve des présentes CGV, qui prévalent sur les conditions d'achat du Client, sauf accord écrit contraire. Les conditions particulières d'un devis, d'une convention ou d'un contrat signé prévalent sur les présentes CGV." },
      ] },
      { title: 'Article 2 – Prestations proposées', blocks: [
        { type: 'list', items: [
          'Formations inter-entreprises : sessions ouvertes à des participants de plusieurs organismes, selon le calendrier publié.',
          'Formations intra-entreprise : sessions organisées pour un seul client, dans ses locaux, dans un lieu choisi ou à distance.',
          'Conseil et accompagnement : diagnostic, mise en place et suivi de systèmes de management, accompagnement à l\'accréditation ou à la certification.',
          'Audit : audits internes, audits à blanc, évaluations de conformité à un référentiel.',
        ] },
        { type: 'p', text: 'Le contenu, la durée, le lieu, le format (présentiel ou classe virtuelle) et le prix de chaque prestation sont précisés dans le programme, le devis ou la proposition correspondante.' },
      ] },
      { title: 'Article 3 – Commande et inscription', blocks: [
        { type: 'p', text: "La commande est ferme à réception par EgyMar Consulting de l'un des documents suivants, signé par le Client : devis, bon de commande, convention ou contrat de formation, bulletin d'inscription, ou formulaire d'inscription en ligne validé." },
        { type: 'p', text: "Pour les formations inter-entreprises, les inscriptions sont enregistrées par ordre d'arrivée, dans la limite des places disponibles. Une convocation précisant les modalités pratiques est adressée à chaque participant 10 jours avant la session." },
      ] },
      { title: 'Article 4 – Prix', blocks: [
        { type: 'parts', parts: [{ text: 'Les prix sont indiqués en dirhams marocains (MAD) hors taxes, majorés de la TVA au taux en vigueur. Pour les clients établis à l\'étranger, les prix peuvent être exprimés en ' }, { type: 'highlight', text: '[euros / dollars US]' }, { text: ' et le traitement de la TVA suit la réglementation fiscale marocaine applicable aux prestations rendues à l\'étranger.' }] },
        { type: 'p', text: "Sauf mention contraire, les prix comprennent l'animation, les supports pédagogiques et l'attestation de formation. Les frais de déplacement, d'hébergement et de restauration de l'intervenant, la location de salle et les repas des participants sont facturés en sus lorsqu'ils ne sont pas inclus dans le devis." },
        { type: 'p', text: "Les devis sont valables 30 jours à compter de leur date d'émission." },
      ] },
      { title: 'Article 5 – Facturation et paiement', blocks: [
        { type: 'p', text: "Un acompte de 30 % est exigible à la commande pour les formations intra-entreprise et les missions de conseil et d'audit ; le solde est payable à réception de facture, à l'issue de la prestation." },
        { type: 'p', text: 'Les formations inter-entreprises sont payables au plus tard avant le début de la session.' },
        { type: 'p', text: 'Le paiement s\'effectue par virement bancaire sur le compte indiqué sur la facture ou par chèque.' },
        { type: 'p', text: 'Les frais bancaires liés aux virements internationaux sont à la charge du Client.' },
        { type: 'p', text: "Sauf accord contraire, les factures sont payables au maximum 30 jours à compter de leur date d'émission, dans la limite des délais fixés par la réglementation marocaine relative aux délais de paiement." },
        { type: 'p', text: "Tout retard de paiement entraîne de plein droit l'application de pénalités de retard au taux prévu par la réglementation en vigueur, et peut conduire EgyMar Consulting à suspendre les prestations en cours." },
      ] },
      { title: 'Article 6 – Annulation, report et remplacement par le Client', blocks: [
        { type: 'p', text: "Toute annulation ou demande de report doit être notifiée par écrit (e-mail) à EgyMar Consulting. Le Client peut remplacer un participant inscrit par une autre personne de son organisme, sans frais, jusqu'à la veille de la session." },
        { type: 'table', headers: ['Date de l\'annulation par le Client', 'Montant dû'], rows: [
          ['Plus de 15 jours calendaires avant le début', 'Aucun frais ; l\'acompte est remboursé ou reporté'],
          ['Entre 15 et 8 jours avant le début', '50 % du prix de la prestation'],
          ['Moins de 8 jours avant le début, ou absence', '100 % du prix de la prestation'],
        ] },
        { type: 'p', text: 'Toute formation ou mission commencée est due en totalité. Les frais de déplacement ou d\'hébergement déjà engagés et non remboursables sont facturés au Client.' },
      ] },
      { title: 'Article 7 – Annulation ou report par EgyMar Consulting', blocks: [{ type: 'p', text: "EgyMar Consulting se réserve le droit de reporter ou d'annuler une session, notamment en cas de nombre insuffisant de participants ou d'indisponibilité de l'intervenant, en informant le Client au moins 7 jours avant la date prévue, sauf cas de force majeure. Le Client peut alors choisir une nouvelle date ou obtenir le remboursement intégral des sommes versées, sans autre indemnité." }] },
      { title: 'Article 8 – Formations à distance', blocks: [
        { type: 'p', text: "Pour les formations en classe virtuelle, le Client s'assure que chaque participant dispose d'un ordinateur, d'une connexion internet stable, d'une caméra et d'un micro. Les liens de connexion sont personnels et ne doivent pas être partagés." },
        { type: 'p', text: "L'enregistrement, la capture ou la diffusion des sessions par les participants est interdit sans accord écrit d'EgyMar Consulting. Une difficulté technique propre au Client ou au participant ne donne lieu ni à remboursement ni à report." },
      ] },
      { title: 'Article 9 – Assiduité et attestation', blocks: [{ type: 'p', text: 'Une feuille de présence est signée ou un relevé de connexion est établi pour chaque demi-journée. Une attestation de formation est délivrée aux participants ayant suivi au moins 80 % de la durée prévue. Lorsque la formation comporte une évaluation, les résultats peuvent être communiqués au Client commanditaire.' }] },
      { title: 'Article 10 – Missions de conseil et d\'audit', blocks: [
        { type: 'p', text: "EgyMar Consulting s'engage à exécuter ses missions avec soin, selon les règles de l'art, dans le cadre d'une obligation de moyens. Le Client s'engage à fournir en temps utile les informations, documents et accès nécessaires, et à désigner un interlocuteur. Tout retard dû au Client peut entraîner un décalage du planning et une facturation complémentaire." },
        { type: 'p', text: "Les conclusions d'audit reflètent la situation constatée sur la base d'un échantillonnage, aux dates de l'intervention. Elles ne garantissent pas l'obtention d'une accréditation ou d'une certification, qui relève de la seule décision de l'organisme compétent." },
        { type: 'p', text: "EgyMar Consulting veille à son impartialité et informe le Client de toute situation susceptible de créer un conflit d'intérêts." },
      ] },
      { title: 'Article 11 – Propriété intellectuelle', blocks: [
        { type: 'p', text: "Les programmes, supports, outils, modèles de documents et méthodes remis ou présentés au Client restent la propriété exclusive d'EgyMar Consulting. Le Client et les participants bénéficient d'un droit d'usage personnel et interne ; toute reproduction, diffusion, adaptation ou utilisation pour former des tiers est interdite sans accord écrit." },
        { type: 'p', text: 'Les livrables spécifiquement réalisés pour le Client dans le cadre d\'une mission de conseil peuvent être librement utilisés par lui en interne après paiement intégral du prix.' },
      ] },
      { title: 'Article 12 – Confidentialité', blocks: [{ type: 'p', text: "Chaque partie s'engage à garder confidentielles les informations et documents de l'autre partie dont elle a connaissance à l'occasion de la prestation, pendant toute sa durée et 3 ans après son terme. EgyMar Consulting peut citer le nom du Client comme référence commerciale, sauf opposition écrite de celui-ci." }] },
      { title: 'Article 13 – Données personnelles', blocks: [{ type: 'p', text: 'Les données personnelles du Client et des participants sont traitées conformément à la loi 09-08 et, le cas échéant, au RGPD, selon les modalités décrites dans la Politique de confidentialité.' }] },
      { title: 'Article 14 – Responsabilité', blocks: [{ type: 'p', text: "La responsabilité d'EgyMar Consulting, toutes causes confondues, est limitée au montant hors taxes effectivement payé par le Client pour la prestation concernée. EgyMar Consulting ne saurait être tenue responsable des dommages indirects (perte d'exploitation, de chiffre d'affaires ou d'image), ni de l'usage que le Client fait des conseils et recommandations fournis." }] },
      { title: 'Article 15 – Force majeure', blocks: [{ type: 'p', text: "Aucune des parties ne peut être tenue responsable d'un manquement causé par un événement de force majeure au sens de l'article 269 du Dahir des obligations et des contrats. La prestation est alors reportée à une date convenue entre les parties ; si le report est impossible, les sommes versées pour les prestations non réalisées sont remboursées." }] },
      { title: 'Article 16 – Clients particuliers (consommateurs)', blocks: [{ type: 'p', text: "Lorsque le Client est un particulier agissant en dehors de son activité professionnelle et commande à distance (site internet, e-mail, téléphone), il dispose, conformément à la loi n° 31-08 édictant des mesures de protection du consommateur, d'un délai de rétractation de 7 jours à compter de sa commande, sans avoir à se justifier ni à payer de pénalité. Ce droit ne peut plus être exercé si la prestation a commencé, avec son accord, avant la fin de ce délai." }] },
      { title: 'Article 17 – Clients établis hors du Maroc', blocks: [
        { type: 'p', text: "Les prix sont payables en totalité dans la devise indiquée sur la facture, nets de tous frais bancaires, taxes et retenues à la source applicables dans le pays du Client ; si une retenue est imposée, le Client verse le montant complémentaire nécessaire pour qu'EgyMar Consulting perçoive la somme facturée." },
        { type: 'p', text: 'Le Client est responsable du respect des règles propres à son pays (financement de la formation, obligations fiscales, autorisations éventuelles).' },
        { type: 'p', text: "Les formations et missions à l'étranger peuvent nécessiter des délais de préparation plus longs (visas, déplacements) ; les frais correspondants sont précisés au devis." },
      ] },
      { title: 'Article 18 – Droit applicable, langue et litiges', blocks: [
        { type: 'p', text: 'Les présentes CGV sont régies par le droit marocain. Elles sont rédigées en français ; en cas de traduction, la version française fait foi.' },
        { type: 'p', text: "En cas de différend, les parties recherchent une solution amiable pendant 15 jours à compter de la notification écrite du différend. À défaut d'accord, le litige est soumis à la compétence exclusive des tribunaux de commerce d'Agadir, sauf disposition légale impérative contraire, notamment en faveur d'un Client consommateur." },
      ] },
      { title: 'Article 19 – Modification des CGV', blocks: [{ type: 'p', text: 'EgyMar Consulting peut modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.' }] },
    ],
    updated: 'Dernière mise à jour : 23 sept. 2026.',
  },
  faq: {
    title: 'Foire aux questions (FAQ)',
    intro: 'Formation, conseil et audit – réponses aux questions les plus fréquentes.',
    categories: [
      { title: 'Le cabinet', questions: [
        ["1. Qui est EgyMar Consulting ?", "EgyMar Consulting est un cabinet de formation, de conseil et d'audit basé à Agadir. Il est spécialisé dans la qualité, la métrologie, les laboratoires d'essais et le développement des compétences, et s'appuie sur plus de 30 ans d'expérience en laboratoire, en audit et en évaluation technique."],
        ['2. Dans quels domaines intervenez-vous ?', "Nos principaux domaines sont les systèmes de management de la qualité (ISO 9001, NM ISO/IEC 17025, NM ISO/IEC 17043), la métrologie, les essais et les comparaisons inter-laboratoires, l'audit interne, ainsi que les compétences comportementales (communication, personnalités au travail, cohésion d'équipe….)."],
        ["3. À qui s'adressent vos prestations ?", "Aux entreprises, laboratoires d'essais et d'étalonnage, bureaux d'études, entreprises du BTP, administrations, chambres professionnelles, centres de formation et particuliers souhaitant développer leurs compétences."],
        ["4. Intervenez-vous en dehors du Maroc ?", "Oui. Nous intervenons au Maroc et à l'international, en présentiel ou à distance. Pour les missions à l'étranger, les frais de déplacement et les délais de préparation sont précisés dans le devis."],
      ] },
      { title: 'Les formations', questions: [
        ['5. Quels formats de formation proposez-vous ?', 'Nous proposons des formations inter-entreprises (sessions ouvertes à plusieurs organismes), des formations intra-entreprise (organisées pour un seul client, dans ses locaux ou dans un lieu choisi) et des formations en classe virtuelle.'],
        ['6. Pouvez-vous adapter une formation à nos besoins ?', 'Oui. Toutes nos formations intra-entreprises peuvent être adaptées : contenu, durée, exemples tirés de votre activité, niveau des participants. Une analyse préalable de vos besoins permet de construire un programme sur mesure.'],
        ["7. Comment se déroule une formation à distance ?", "La formation a lieu en direct sur une plateforme de visioconférence (Zoom ou équivalent). Chaque participant reçoit un lien personnel et a besoin d'un ordinateur, d'une connexion internet stable, d'une caméra et d'un micro. Les supports sont transmis sous format électronique."],
        ['8. Combien de participants par session ?', 'Pour garantir des échanges de qualité, les sessions accueillent en général [8 à 20] participants. Ce nombre peut être ajusté pour les formations intra-entreprise.'],
        ['9. Y a-t-il des prérequis ?', 'Les prérequis éventuels sont indiqués dans le programme de chaque formation. En cas de doute, contactez-nous : nous vous aiderons à choisir le niveau adapté.'],
        ['10. Recevrai-je une attestation ?', 'Oui. Une attestation de formation est remise à chaque participant ayant suivi au moins 80 % de la durée prévue. Certaines formations comportent une évaluation des acquis.'],
        ['11. Les supports de formation sont-ils fournis ?', 'Oui, un support pédagogique est remis à chaque participant. Il est réservé à un usage personnel et interne et ne peut pas être reproduit ni diffusé sans autorisation.'],
      ] },
      { title: 'Conseil et audit', questions: [
        ['12. En quoi consiste une mission de conseil ?', "Nous vous accompagnons dans le diagnostic de votre organisation, la mise en place ou l'amélioration de votre système de management, la préparation à une accréditation ou à une certification, et le suivi des actions d'amélioration."],
        ['13. Pouvez-vous réaliser nos audits internes ?', "Oui. Nous réalisons des audits internes et des audits à blanc selon le référentiel de votre choix (ISO 9001, NM ISO/IEC 17025, NM ISO/IEC 17043…). Chaque audit donne lieu à un rapport présentant les constats et les pistes d'amélioration."],
        ["14. Garantissez-vous l'obtention de l'accréditation ou de la certification ?", "Non. Nous mettons tout en œuvre pour vous préparer au mieux, mais la décision d'accréditation ou de certification relève uniquement de l'organisme compétent."],
        ["15. Comment garantissez-vous votre impartialité ?", "Nous vous informons de toute situation susceptible de créer un conflit d'intérêts, et nous n'auditons pas un système que nous avons nous-mêmes mis en place, sauf accord explicite du client."],
      ] },
      { title: 'Inscription, tarifs et paiement', questions: [
        ["16. Comment s'inscrire à une formation ?", "Vous pouvez vous inscrire via le formulaire en ligne, par e-mail ou par téléphone. L'inscription est confirmée à réception du bulletin ou du devis signé. Une convocation vous est ensuite envoyée avant la session."],
        ['17. Comment obtenir un devis ?', 'Remplissez le formulaire de demande de devis ou écrivez-nous en précisant votre besoin, le nombre de participants, le lieu et les dates souhaitées. Nous vous répondons sous 48 heures ouvrées.'],
        ['18. Quels sont les modes de paiement ?', "Le paiement s'effectue principalement par virement bancaire, ou par [chèque / paiement en ligne]. Les conditions (acompte, délais) sont précisées dans le devis et dans nos conditions générales de vente."],
        ['19. Facturez-vous en devises pour les clients étrangers ?', 'Oui. Pour les clients établis hors du Maroc, les prix peuvent être exprimés en euros ou dollars US. Les frais bancaires des virements internationaux sont à la charge du client.'],
      ] },
      { title: 'Annulation et report', questions: [
        ["20. Que se passe-t-il si je dois annuler mon inscription ?", "L'annulation est gratuite si elle nous parvient par écrit plus de 15 jours avant le début de la formation. Au-delà, des frais s'appliquent selon le barème de nos conditions générales de vente."],
        ['21. Puis-je me faire remplacer par un collègue ?', "Oui, sans frais, jusqu'à la veille de la session. Il suffit de nous communiquer le nom et les coordonnées du remplaçant."],
        ['22. Une session peut-elle être reportée par le cabinet ?', 'Exceptionnellement, en cas de nombre insuffisant de participants ou d’empêchement majeur. Vous êtes prévenu au moins 7 jours avant et pouvez choisir une nouvelle date ou le remboursement intégral des sommes versées.'],
      ] },
      { title: 'Données personnelles', questions: [
        ['23. Comment sont utilisées mes données ?', "Vos données servent uniquement à traiter vos demandes, gérer vos inscriptions et, si vous l'acceptez, vous informer de nos formations. Elles ne sont jamais vendues. Vous disposez d'un droit d'accès, de rectification et d'opposition, conformément à la loi 09-08. Pour plus d'informations, consultez notre politique de confidentialité."],
      ] },
    ],
  },
}