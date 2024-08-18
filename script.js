const questions = [
  {
    question: "While working in the neonatal ICU ,your team delivers a premature infant at 27 weeks of gestation and weighing 1500 gm. How soon you request fundus examination by an ophthalmologist ?",
    answers: [
      { text: "Immediately", correct: false },
      { text: "3-4 weeks after delivery", correct: false },
      { text: "At 34 weeks gestational age", correct: true },
      { text: "At 40 weeks gestational age", correct: false },
    ],
  },

 {
    question: "Which of the following is/are the differentiating feature between Retinoblastoma and Coat's disease? 1. Leukocoria2. Male preponderance in RB3. Presence of retinal exudations in Coat's disease4.Males are affected less in Coats disease5. Coats disease is associated with Turners syndrome",
    answers: [
      { text: "1,4 are correct ", correct: false },
      { text: "2,4 are correct", correct: false },
      { text: "2,5 are correct", correct: false },
      { text: "3,5 are correct", correct: true },
    ],
  },

 {
    question: "Mark the INCORRECT statement regarding Retinoblastoma",
    answers: [
      { text: "60% are hereditary also known as Germline retinoblastoma.", correct: true },
      { text: "Leucocoria followed by strabismus are the most common presentation", correct: false },
      { text: "Earlier presentation is bilateral, multifocal .", correct: false },
      { text: "On histopathology , Flexner Wintersteiner rosettes are seen", correct: false },
    ],
  },

 {
    question: "7-year-old male child present with normal vision 6/6 in right eye & hand movement perception close to the face in left eye. On fundoscopy, his right eye was normal & left eye showed retinal detachment, subretinal yellowish exudates and telangiectatic vessels. The most likely diagnosis is?",
    answers: [
      { text: "Coats’ disease", correct: true },
      { text: "Familial exudative vitreoretinopathy", correct: false },
      { text: "Retinoblastoma", correct: false },
      { text: "Retinopathy of prematurity", correct: false },
    ],
  },

 {
    question: "A30 year old women presented with history of nyctalopia and constriction of visual field of the left eye. On fundus examination, a pale optic disc, narrowed arterioles and extensive proliferations of the pigment epithelium in form of bone spicules in the periphery could be seen. The doctor made the diagnosis of retinitis pigmentosa. Which of the following disease is not associated with Retinitis pigmentosa ?",
    answers: [
      { text: "Refsum's disease", correct: false },
      { text: "Hallervorden-Spatz disease", correct: true },
      { text: "NARP", correct: false },
      { text: "Abetalipoproteinemia", correct: false },
    ],
  },

 {
    question: "25 year old patient presented to the ophthalmology OPD with complains of floaters and painless loss of vision in the left eye. The patient stated that nine days prior he was struck in the face by shrapnelfrom an explosion at his workplace, for which he did not seek medical attention at that time as there was no hospitals nearby. After detailed evaluation by the ophthalmologist he was found to have rhegmatogenous Retinal Detachment. All of the following are risk factors for Rhegmatogenous Retinal Detachment except.",
    answers: [
      { text: "Pilocarpine", correct: false },
      { text: "Aphakia", correct: false },
      { text: "Lattice degeneration", correct: false },
      { text: "Hypermetropia", correct: true },
    ],
  }, 

{
    question: "5 year old woman admitted in the oncology department for management of breast cancer which metastases to brain. Aweek after her admission she started experiencing sudden painless loss of vision. After evaluation by the doctors she is found to have exudative retinal detachment. Which of the following is not a cause of exudative retinal detachment?",
    answers: [
      { text: "Toxemia of pregnancy", correct: false },
      { text: "Malignant hypertension", correct: false },
      { text: "Posterior scleritis", correct: false },
      { text: "Diabetic retinopathy", correct: true },
    ],
  },

 {
    question: "Which of the following is not a feature of retinoschisis",
    answers: [
      { text: "Splitting of inner retinal layers", correct: false },
      { text: "Require active treatment", correct: true },
      { text: "Cartweel maculopathy is seen", correct: false },
      { text: "May be seen in patients of high myopia", correct: false },
    ],
  },

 {
    question: "A child born at 28 weeks and he was diagnosed to have zone 1 ROP in both eyes at post conceptional 33 weeks of age. What would be the next treatment ?",
    answers: [
      { text: "cryotherapy", correct: false },
      { text: "Laser photocoagulation in worsen eye and follow up for other eye.", correct: false },
      { text: "Urgent photocoagulation in both eyes to remove avascular peripheral retina", correct: false },
      { text: "Follow up", correct: true },
    ],
  },

 {
    question: "Mizuo phenomenon is seen in",
    answers: [
      { text: "Oguchi disease", correct: true },
      { text: "Stargardt disease", correct: false },
      { text: "Gyrate atrophy", correct: false },
      { text: "Retinitis pigmentosa", correct: false },
    ],
  },

 {
    question: "Thinnest part of retina is",
    answers: [
      { text: "Surrounding optic nerve head", correct: false },
      { text: "Foveola", correct: true },
      { text: "Fovea", correct: false },
      { text: "Nasally to fovea", correct: false },
    ],
  },

 {
    question: "Which of the following is correct regarding retinal anatomy",
    answers: [
      { text: "1,3 are correct", correct: false },
      { text: "2.4 are correct", correct: false },
      { text: "3,5 are correct", correct: true },
      { text: "1,4,5 are correct", correct: false },
    ],
  },

 {
    question: "Outer Blood Retinal Barrier is formed",
    answers: [
      { text: "Internal limiting membrane", correct: false },
      { text: "Outer limiting membrane", correct: false },
      { text: "Retinal Pigment Epithelium", correct: true },
      { text: "Endothelium of microvasculature", correct: false },
    ],
  },

 {
    question: "Which of the following represents the retinal detachment",
    answers: [
      { text: "Separation of neurosensory retina from choroid", correct: false },
      { text: "Separation of bruch’s membrane from retinal pigment epithelium", correct: false },
      { text: "Separation of neurosensory retina from retinal pigment epithelium", correct: true },
      { text: "Separation of internal limiting membrane from retinal pigment epithelium", correct: false },
    ],
  },

 {
    question: "Mark the INCORRECT statement regarding Retinopathy of prematurity (ROP)",
    answers: [
      { text: "preterm child of 26 weeks should be screened ideally at 32 weeks for ROP", correct: true },
      { text: "Plus disease involves dilation of arteries in atleast 1quadrant of the posterior fundus", correct: true },
      { text: "Stage 3 is characterised by a ridge with extra retinal fibrovascular proliferation", correct: false },
      { text: "Rush disease progresses to stage 5 within few days", correct: false },
    ],
  },

 {
    question: "Gyrate atrophy is a retinal degenerative disease involving deficiency of ornithine aminotransferase enzyme. Such patients are likely to be benefit from:",
    answers: [
      { text: "Ornithine free diet", correct: false },
      { text: "Arginine free diet", correct: true },
      { text: "Use of folic acid and pyridoxine", correct: false },
      { text: "Use of B1,B6 and Bi2", correct: false },
    ],
  },

 {
    question: "A 57-year-old poorly controlled diabetic male presents with floaters in his left eye for 1 week. His visual acuity measures 20/20, right eye, and 20/80, left eye. According to the Diabetic Retinopathy Study, all of the following meet the high-risk criteria for significant visual loss with proliferative diabetic retinopathy (PDR) except:",
    answers: [
      { text: "nvo21/3- % disc area", correct: false },
      { text: "NVD+ Vitreous or Preretinal haemorrhage", correct: false },
      { text: "NVE=% disc area and Preretinal or Vitreous haemorrhage", correct: false },
      { text: "NVD + Clinically signifacnt macular edema", correct: true },
    ],
  },

 {
    question: "Intraocular foreign body of what material can not be observed as such and need to be removed at the earliest?",
    answers: [
      { text: "Nickel", correct: false },
      { text: "Chromium", correct: false },
      { text: "Gold", correct: false },
      { text: "Copper", correct: true },
    ],
  },

 {
    question: "PASCAL is used for",
    answers: [
      { text: "Angiography", correct: false },
      { text: "Laser photocoagulation", correct: true },
      { text: "RNFL thickness", correct: false },
      { text: "Ganglion cell layer", correct: false },
    ],
  },

 {
    question: "MARINA trial is being organized to do what?",
    answers: [
      { text: "Role of new antibiotics in fungal ulcer", correct: false },
      { text: "Role of Anti VEGF in diabetes.", correct: false },
      { text: "RoleofAfliberceptinwetARMD", correct: false },
      { text: "Role of ranibizumab in ARMD", correct: true },
    ],
  },

 {
    question: "A 70 year old man from Europe living in India complaints of gradual onset painless, progressive blurring of vision. He says he could earlier drive to the home by himself but is not able to do so now. Fundus examination is given below. Which ofthe following is not treatment modality for this patient ?",
    answers: [
      { text: "Anti VEGF", correct: false },
      { text: "Photodynamic therapy", correct: false },
      { text: "Macular grid photocoagulation", correct: false },
      { text: "Panretinal Photocaogulation", correct: true },
    ],
  },

 {
    question: "A 35 year old male patient came with history of progressive night blindness and decreased vision since childhood. Now he developed tubular vision. Retinal examination as shown below revealed jet black, spidery spots like bone corpuscles. .Which of the following statement is true ?",
    answers: [
      { text: "Most commonly inherited as X-linked recessive", correct: false },
      { text: "Triad includes Attenuated vessels. optic atrophy and disc edema", correct: true },
      { text: "Electrophysiological changes appear early in the disease before the objective signs", correct: false },
      { text: "Argus 2 retinal implant is used as a treatment modality", correct: false },
    ],
  },

 {
    question: "Which of the following is NOT an associated finding seen in patients with retinitis pigmentosa? 1. Cystoid macular edema 2. Posterior subcapsular cataract3. Epiretinal membrane4. Endophthalmitis5. affects cones initially.",
    answers: [
      { text: "1, 4are correct", correct: false },
      { text: "4,5 are correct", correct: true },
      { text: "3,5 are correct", correct: false },
      { text: "2,4 are correct", correct: false },
    ],
  },

 {
    question: "A person is diagnosed to be a diabetic on his 40th birthday. When will you recommend a dilated fundoscopic examination?",
    answers: [
      { text: "Immediately", correct: true },
      { text: "Before his 45th birthday", correct: false },
      { text: "Before he turns 50 years of age", correct: false },
      { text: "When he complains of dimness of vision", correct: false },
    ],
  },

 {
    question: "Which of the following is not a feature of Leber congenital amaurosis?",
    answers: [
      { text: "Pupillary reflexes are impaired", correct: false },
      { text: "Enophthalmos", correct: false },
      { text: "Autosomal Dominant", correct: true },
      { text: "MC retinal dystrophy in infants", correct: false },
    ],
  },

 {
    question: "Most Common cause gradual vision loss in Diabetic Retinopathy:",
    answers: [
      { text: "cataract", correct: false },
      { text: "Macular edema", correct: true },
      { text: "Glaucoma", correct: false },
      { text: "Keratoconus", correct: false },
    ],
  },

 {
    question: "Which of the following is not true regarding purtschner retinopathy?",
    answers: [
      { text: "Head injury, pancreatic injury are the most common cause", correct: false },
      { text: "Gradual painless loss of vision is seen", correct: true },
      { text: "Multiple hemorrhages in retina are seen", correct: false },
      { text: "Associated with HELLP Syndrome", correct: false },
    ],
  },

 {
    question: "Mark the correct match regarding dyes used in ophthalmology",
    answers: [
      { text: "Alcian blue :Anterior Capsule staining in phacoemulsification.", correct: false },
      { text: "Brilliant blue green dye :Macular surgeries.", correct: true },
      { text: "Trypan blue: Granular dystrophy.", correct: false },
      { text: "Rose bengal dye :Epithelial defect.", correct: false },
    ],
  },

 {
    question: "A 30 year old female patient who was on estrogen containing pills presents with sudden painless loss of vision. The fundus image is shown below. What is the most likely diagnosis ?",
    answers: [
      { text: "Central retinal vein occlusion", correct: true },
      { text: "Diabetic retinopathy", correct: false },
      { text: "Cystoid macular edema", correct: false },
      { text: "Central retinal artery occlusion", correct: false },
    ],
  },

 {
    question: "Not true regarding retinal anatomy",
    answers: [
      { text: "Most of the layers of retina are absent at foveala", correct: false },
      { text: "The layer of retina in contact with vitreous is retinal pigment epithelium", correct: true },
      { text: "Posterior pole consists of optic nerve head and macula", correct: false },
      { text: "Fovea has a zone where there is no blood supply", correct: false },
    ],
  },

 {
    question: "Outer blood retinal barrier is formed",
    answers: [
      { text: "Internal limiting mebrane", correct: false },
      { text: "Endothelium", correct: false },
      { text: "Retinal pigment epithelium", correct: true },
      { text: "Ganglion cells", correct: false },
    ],
  },

 {
    question: "Mark the wrong match regarding types of retinal detachment",
    answers: [
      { text: "Rhegmatogenous retinal detachment: Retinal tear", correct: false },
      { text: "Exudative :Shifting fluid", correct: false },
      { text: "Tractional: Bullous RD", correct: true },
      { text: "Choroidal melanoma: Exudative RD", correct: false },
    ],
  },

 {
    question: "Which of the following is not a prerequisite for performing pneumatic retinopexy:",
    answers: [
      { text: "Fresh retinal detachment", correct: false },
      { text: "Inferior retinal detachment", correct: true },
      { text: "No air travel", correct: false },
      { text: "Ptshould be able to maintain position", correct: false },
    ],
  },

 {
    question: "60-year-old woman with diabetes mellitus and hypertension reports having difficulty reading for the past 4 months. Her visual acuity is 20/25. Her fundus photograph given below. Which one of the following isNOT a manifestation of below condition?",
    answers: [
      { text: "Drusens", correct: true },
      { text: "Hard exudates", correct: false },
      { text: "Dot blot haemorrhage", correct: false },
      { text: "Cotton wool spots", correct: false },
    ],
  },

 {
    question: "A 18 year old boy with sickle cell disease referred to eye clinic for evaluation of two days of blurry vision and new-onset floaters in the left eye that developed while playing basketball. Fundus examination is shown below .Which of the following statement is incorrect regarding this condition",
    answers: [
      { text: "Sea fan appearance seen in superotemporal area", correct: false },
      { text: "HbSS has severe ocular manifestations compared HbSC", correct: true },
      { text: "Angioid streaks are seen", correct: false },
      { text: "CRVOisseen", correct: false },
    ],
  },

 {
    question: "Which of the following is characterstic sign of diabetic retinopathy?",
    answers: [
      { text: "Increase in pericytes", correct: false },
      { text: "Thinned out capillary basement membrane", correct: false },
      { text: "Lipohyaline deposits", correct: false },
      { text: "Proliferation of endothelial cells", correct: true },
    ],
  },

 {
    question: "Which is the second order neuron in optic pathway?",
    answers: [
      { text: "Bipolar cells", correct: false },
      { text: "Ganglionic cells", correct: true },
      { text: "rods and cones", correct: false },
      { text: "Astrocytes", correct: false },
    ],
  },

 {
    question: "Which of the following is True regarding intraocular retinoblastoma?",
    answers: [
      { text: "60% are familial and the rest about 40% occur sporadically.", correct: false },
      { text: "Leukocoria or yellowish-white pupillary reflex is 2 ¢ commonest presenting feature.", correct: false },
      { text: "ICRB is presently being followed to decide the treatment modality", correct: false },
      { text: "Allof the above", correct: true },
    ],
  },

 {
    question: "A 30 year old, male, IT professional presents with complaints of seeing distorted images and decreased visual acuity. He has previously been treated for anxiety. What is the most probable diagnosis?",
    answers: [
      { text: "Cystoid macular oedema", correct: false },
      { text: "Retinal detachment", correct: false },
      { text: "Central serous retinopathy", correct: true },
      { text: "Functional", correct: false },
    ],
  },

 {
    question: "A 33-year-old woman presents with a 3-day history of seeing spots floating around in her eye. Today, she notes streaks of light in the same eye accompanied by a “shadow” in her peripheral vision that moves when looking up and down. Her medical history is significant for migraine headaches: however, she has never had such visual symptoms with her headaches. What is the most likely diagnosis?",
    answers: [
      { text: "Ophthalmic migraine", correct: false },
      { text: "Malingering", correct: false },
      { text: "Retinal detachment", correct: true },
      { text: "Amaurosis fugax", correct: false },
    ],
  },

 {
    question: "Optic atrophy is not seen in?",
    answers: [
      { text: "Retinitis pigmentosa", correct: false },
      { text: "Methanol Poisoning", correct: false },
      { text: "CRVO", correct: false },
      { text: "Polypoidal Choroidal Vasculopathy", correct: true },
    ],
  },

 {
    question: "Which of the following is most radiosensitive structure in retina?",
    answers: [
      { text: "Bipolar cell layer", correct: false },
      { text: "Pigment Epithelium", correct: false },
      { text: "Layers of rods & cones", correct: true },
      { text: "Ganglion cell layer", correct: false },
    ],
  },

 {
    question: "Fovea has all of the following layers of the retina except",
    answers: [
      { text: "Internal limiting membrane", correct: false },
      { text: "External limiting membrane", correct: false },
      { text: "Cones", correct: false },
      { text: "Outer Plexiform layer", correct: true },
    ],
  },

 {
    question: "Maximum cones are seen in",
    answers: [
      { text: "Limbus", correct: false },
      { text: "Fovea centralis", correct: true },
      { text: "Macula lutea", correct: false },
      { text: "Blind spot", correct: false },
    ],
  },

 {
    question: "Which findings are true in central retinal artery occlusion?",
    answers: [
      { text: "Direct pupillary reflex-, RAPD +", correct: true },
      { text: "Direct pupillary reflex +, RAPD +", correct: false },
      { text: "Both absent", correct: false },
      { text: "Scalloped pupil", correct: false },
    ],
  },

 {
    question: "Phenomenon in which all colors are seen as grey due to decreased sensitivity of cones is called",
    answers: [
      { text: "Stile Crawford effect", correct: false },
      { text: "Purkinje shift", correct: true },
      { text: "Dark adaptation", correct: false },
      { text: "Color blindness", correct: false },
    ],
  },

 {
    question: "The triad of shaken baby syndrome constitutes of?",
    answers: [
      { text: "Subdural hemorrhage, retinol hemorrhage, and encephalopathy", correct: true },
      { text: "Retinal hemorrhage, vitreous hemorrhage and hyphema", correct: false },
      { text: "Subarachnoid hemorrhage, vitreous hemorrhage and intracranial hemorrhage", correct: false },
      { text: "Subdural, subarachnoid and intracerebral hemorrhage", correct: false },
    ],
  },

 {
    question: "All of them are true about ERG except",
    answers: [
      { text: "Measuretshepotentialdifferenceoftheneurosensorylayerofretina", correct: false },
      { text: "The negative A wave is produced by the hyperpolarization of the photoreceptors", correct: false },
      { text: "The positive B wave is due to the bipolar and Muller's cells", correct: false },
      { text: "Flash ERG is a good for detection of macular diseases", correct: true },
    ],
  },

 {
    question: "Development of subretinal demarcation line (watermarks) in the retina are indicative of",
    answers: [
      { text: "Long standing retinal detachment", correct: true },
      { text: "Fresh retinal detachment", correct: false },
      { text: "Retinal tumour formation", correct: false },
      { text: "Normal retinal finding", correct: false },
    ],
  },

 {
    question: "Microaneurysms are the earliest manifestation of diabetic retinopathy. Which of the following layer is involved?",
    answers: [
      { text: "Outer plexiform layer", correct: false },
      { text: "Layer of rods and cones", correct: false },
      { text: "Inner nuclear layer", correct: true },
      { text: "Retinal pigment epithelium", correct: false },
    ],
  },

 {
    question: "Which tissue consumes the highest oxygen?",
    answers: [
      { text: "Choroid", correct: false },
      { text: "Lens", correct: false },
      { text: "Retina", correct: true },
      { text: "Ciliary epithelium", correct: false },
    ],
  },

 {
    question: "All are ocular emergencies except",
    answers: [
      { text: "Diabetic Retinopathy", correct: true },
      { text: "Bacterial endophthalmitis", correct: false },
      { text: "Sympathetic ophthalmitis", correct: false },
      { text: "Eye injury", correct: false },
    ],
  },

 {
    question: "A61 year old man complaints of generalized fatigue, weight loss and fever for several months. He has no vision complaints and and visual acuity measures 20/20 in both eyes. His fundus image is given below .All of the following may be the cause of his underlying condition, except:",
    answers: [
      { text: "Bacterial Endocarditis", correct: false },
      { text: "Leukemia", correct: false },
      { text: "Measles", correct: true },
      { text: "Collagen vascular disease", correct: false },
    ],
  },

 {
    question: "A 62 year old women who had diagnosed with giant cell arteritis three days ago now presented to the eye clinic with sudden painless loss of vision. The fundus examination is given below .The most likely cause would be:",
    answers: [
      { text: "Arteritic AION", correct: true },
      { text: "WNonarteritic AION", correct: false },
      { text: "Papilledema", correct: false },
      { text: "cystoid macular edema", correct: false },
    ],
  },

 {
    question: "100 day glaucoma is seen in which of the following conditions?",
    answers: [
      { text: "Central retinal vein occlusion (CRVO)", correct: true },
      { text: "Steroid induced glaucoma", correct: false },
      { text: "Neovascular glaucoma", correct: false },
      { text: "Central retinal artery occlusion (CRAQ)", correct: false },
    ],
  },

 {
    question: "What is the commonest cause of loss ofvision in Diabetic retinopathy?",
    answers: [
      { text: "Neovascular glaucoma", correct: false },
      { text: "Vitreous hemmorhage", correct: false },
      { text: "Diabetic macular oedema", correct: true },
      { text: "Retinal detachment", correct: false },
    ],
  },

 {
    question: "A44yearoldwomanvisitedtheophthalmologyclinicwithcomplainsofdecrevaisisoniatnngight.She also reported to the doctor that she felt that her peripheral vision fields was decreasing and that she is experiencing some sort of a tunnel vision.After further evaluation the doctor diagnosed her with retinitis pigmentosa. In this condition, which among the following would be the most critical finding for confirmation of the diagnosis?",
    answers: [
      { text: "Bone spicule pigmentation in retina", correct: false },
      { text: "Significantly reduced ERG", correct: true },
      { text: "Tubular visual fields", correct: false },
      { text: "Abnormality in rhodopsin gene", correct: false },
    ],
  },

 {
    question: "A 44 year old man is presenting to the ophthalmology clinic with complaints of blurred vision while drivingwhichalmostcausedhimtobeinanaccident.Healsostatedthathestartedexperiencbitnsgof debinrhisivsisionfields.Heoccasionallyalsoseeslightflashesandshadowsinhisfieldsofvision.After further evaluation, he was found to have retinal detachment. Out of the following ,which is a diagnostic future of exudative retinal detachment?",
    answers: [
      { text: "Demarcation lines", correct: false },
      { text: "Tobacco dusting", correct: false },
      { text: "Fixed folds", correct: false },
      { text: "shifting fluid", correct: true },
    ],
  },

 {
    question: "young patient developed sudden painless loss of vision which recovers spontaneously over a period of 3 months. What is the most probable diagnosis?",
    answers: [
      { text: "Macular hole", correct: false },
      { text: "Angle closure glaucoma", correct: false },
      { text: "Retinal detachment", correct: false },
      { text: "Central Serous retinopathy", correct: true },
    ],
  },

 {
    question: "27 year old pregnant woman comes to your ophthalmology clinic accompanied by her husband. Sheisa G2P1, she came as her gynecologist recommended her a to visit the ophthalmologist for evaluation of her vision as she was having hypertension. Since she is having a risk factor, which of the following would be theearoclularimeanifsestationofpregnancyinducedhypertension?",
    answers: [
      { text: "Soft Exudates", correct: false },
      { text: "Flame shaped hemorrhages", correct: false },
      { text: "Constriction of nasal blood vessels", correct: true },
      { text: "Papilledema", correct: false },
    ],
  },

 {
    question: "All of them are true about retinoblastoma except",
    answers: [
      { text: "Rb1 gene is located on 11q14", correct: true },
      { text: "The commonest cause of intraocular calcification", correct: false },
      { text: "Trilateral retinoblastoma is a combination of bilateral retinoblastoma with pinealoblastoma", correct: false },
      { text: "The commonest tumour of the eye in children", correct: false },
    ],
  },

 {
    question: "The clinical findings differentiating ophthalmic artery occlusion from central Retinal artery occlusion is",
    answers: [
      { text: "Sudden painless loss ofvision", correct: false },
      { text: "Box carring of vessels", correct: false },
      { text: "Area of retinal whitening", correct: false },
      { text: "Absence of cherry red spot", correct: true },
    ],
  },

 {
    question: "A 44 year old diabetic male comes to your ophthalmology op complaining of occasional blurred vision and excessive floaters. He also complained of flashes of lightening when trying to sleep. The doctor dida slit lamp examination which appeared something like a tobacco dust as illustrated in the below image. What is the most probable diagnosis?",
    answers: [
      { text: "Exudative ARMD", correct: false },
      { text: "Gyrate atrophy", correct: false },
      { text: "Retinal detachment", correct: true },
      { text: "Sympathetic ophthalmitis", correct: false },
    ],
  },

 {
    question: "True regarding macula lutea is/are: 1.Presents as blind spot in visual field 2.Temporal to optic disc 3.Central part appears brighter than surrounding retina 4.Rich blood supply 5.Appears as a dark spot on ophthalmoscopy",
    answers: [
      { text: "1,3 are correct", correct: false },
      { text: "1,4,5 are correct", correct: false },
      { text: "2,3,5 are correct", correct: true },
      { text: "2,45 are correct", correct: false },
    ],
  },

 {
    question: "Distance of macula from optic disc is:",
    answers: [
      { text: "1mm", correct: false },
      { text: "2mm", correct: false },
      { text: "2.5mm", correct: false },
      { text: "4mm", correct: true },
    ],
  },

 {
    question: "18 year old college student has visual complaints represented in the image given below. FFA ofthe patient shows presence of :",
    answers: [
      { text: "Central serous retinopathy", correct: true },
      { text: "Cystoid macular edema", correct: false },
      { text: "Age related macular edema", correct: false },
      { text: "Central retinal venous occlusion", correct: false },
    ],
  },

 {
    question: "Campimetry is used to measure:",
    answers: [
      { text: "visual field", correct: true },
      { text: "Pattern of retina", correct: false },
      { text: "Malignant melanoma", correct: false },
      { text: "Squint", correct: false },
    ],
  },

 {
    question: "An ophthalmology intern is asked to evaluate the pupil and retina of a 35 year old diabetic and hypertensive male coming with decreased vision at evening. obtained is magnified as compared to the real image? The intern chose to use a direct",
    answers: [
      { text: "5 times", correct: false },
      { text: "10times", correct: false },
      { text: "15 times", correct: true },
      { text: "20times", correct: false },
    ],
  },

 {
    question: "A 19 year old boy about to take a driving test is asked to produce a routine ophthalmology fitness certificate. He visits his nearest Ophthalmology clinic and takes various tests as per the requirements from the driving license issuing committee. However after the anomaloscope test, he was deemed unfit for acquiring a driving license. What is the anomaloscope used to detect?",
    answers: [
      { text: "Squint", correct: false },
      { text: "Retinopathy", correct: false },
      { text: "Congenital glaucoma", correct: false },
      { text: "Colour blindness", correct: true },
    ],
  },

 {
    question: "A 22 year old man came to the ophthalmologist for routine eye examination. The doctor used an instrument for evaluation of the retina. Which of the below method can be used to examine the retinal periphery?",
    answers: [
      { text: "Direct ophthalmoscopy", correct: false },
      { text: "Retinoscopy", correct: false },
      { text: "Indirect ophthalmoscopy", correct: true },
      { text: "None", correct: false },
    ],
  },

 {
    question: "Using a lens of +14D, magnification of fundus of an emmetropic eye in indirect ophthalmoscopy is:",
    answers: [
      { text: "5 times", correct: true },
      { text: "10times", correct: false },
      { text: "25 times", correct: false },
      { text: "15times", correct: false },
    ],
  },

 {
    question: "A 20-year-old female presented with complaints of blurring of vision for one day. Fundus examination showedmultiplesuperreftinailcheimorarhalges.Thissuperficialretinalhemorrhageisseeninwhich layer of retina?",
    answers: [
      { text: "Inner plexiform layer", correct: false },
      { text: "Nerve fiber layer", correct: true },
      { text: "Inner nuclear layer", correct: false },
      { text: "Quter nuclear layer", correct: false },
    ],
  },

 {
    question: "Earliest manifestation of diabetic retinopathy?",
    answers: [
      { text: "Hard exudates", correct: false },
      { text: "Soft exudates", correct: false },
      { text: "Microaneurysm", correct: true },
      { text: "Dot and blot hemorrhages", correct: false },
    ],
  },

 {
    question: "Dilator pupillae muscle is under sympthetic control, which on stimulation causes mydriasis .Which of the following statement is correct regarding its neuronal circuit ?",
    answers: [
      { text: "1° neuron starts in hypothalmus and ends at ciliospinal center of Budge (C8-11)", correct: true },
      { text: "1° neuron starts in hypothalmus and ends in superior cervical ganglion", correct: false },
      { text: "2nd neuron starts from superior cervical ganglion and ends in ciliary ganglion", correct: false },
      { text: "Sympathetic fibers join with the the Optic nerve and ends in dilator pupillae", correct: false },
    ],
  },

 {
    question: "A55 year old diabetic patient presents with complaints of transient obscuration ofvision for last one week followed by sudden diminution of vision. Which of the following would be best test to evaluate his symptoms ?",
    answers: [
      { text: "Serum ACE levels", correct: false },
      { text: "Quantiferon-Gold TB test", correct: false },
      { text: "Serum homocysteine level", correct: true },
      { text: "Serum creatinine level", correct: false },
    ],
  },

 {
    question: "Healthy 26-year-old man was presented with bilateral visual loss from one week ago. Best corrected visual acuity (BCVA) was 3/10 in both eyes. Slit lamp examination was normal. Fundus examination showed macular edema in the posterior pole of both eyes. Which of the following would be the investigation of choice for confirmation of the diagnosis of macular edema?",
    answers: [
      { text: "Biopsy", correct: false },
      { text: "FA", correct: false },
      { text: "Optical coherence tomography", correct: true },
      { text: "ERG", correct: false },
    ],
  },

 {
    question: "A75 years old elderly male presents with Transient ischemic stroke and has sudden loss of vision in one eye. Examination reveals a cherry red spot over the fundus. Which of the following findings are true about this condition ?",
    answers: [
      { text: "Direct pupillary reflex +, RAPD +", correct: false },
      { text: "Direct pupillary reflex -, RAPD +", correct: true },
      { text: "Direct pupillary reflex - ,RAPD -", correct: false },
      { text: "Direct pupillary reflex+,RAPD-", correct: false },
    ],
  },

 {
    question: "2yearoldchildhavingleucocoriawasdiagnosedtohaveunilateralretinoblastomafilhallfithenglobe. What is the management of this patient ?",
    answers: [
      { text: "Enucleation", correct: true },
      { text: "Chemotherapy followed by local therapy", correct: false },
      { text: "Photodynamic therapy", correct: false },
      { text: "Radiotherapy followed by chemotherapy", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },

 {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },





 
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();