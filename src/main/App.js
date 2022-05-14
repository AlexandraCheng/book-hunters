import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import RecsList from './components/RecsList';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [blocked, setBlocked] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const recs = {
  "books": [
    {
      "title": "Geography of Travel & Tourism",
      "image": "https://images.isbndb.com/covers/25/65/9780766832565.jpg",
      "title_long": "Geography of Travel & Tourism",
      "date_published": "2002",
      "publisher": "Delmar Cengage Learning",
      "synopsys": "The Authors Provide A Basic Geographic Overview Of The World And Each Major Geographic Region, Providing Insights About The Geographic Character Of Specific Regions To Show How They Establish A Setting For Tourism.",
      "authors": [
        "Hudman, Lloyd E.",
        "Jackson, Richard H"
      ],
      "isbn13": "9780766832565",
      "edition": "4",
      "binding": "Paperback",
      "isbn": "0766832562",
      "language": "en",
      "dimensions": "Height: 10.75 Inches, Length: 8.25 Inches, Weight: 2.5573622392 Pounds, Width: 0.75 Inches",
      "pages": 552
    },
    {
      "title": "Eating Culture: An Anthropological Guide to Food",
      "image": "https://images.isbndb.com/covers/46/50/9781442604650.jpg",
      "title_long": "Eating Culture: An Anthropological Guide to Food",
      "date_published": "2013",
      "publisher": "University of Toronto Press, Higher Education Division",
      "synopsys": "Humans Have An Appetite For Food, And Anthropology - As The Study Of Human Beings, Their Culture, And Society - Has An Interest In The Role Of Food. From Ingredients And Recipes To Meals And Menus Across Time And Space, Eating Culture Is A Highly Engaging Overview That Illustrates The Important Role That Anthropology And Anthropologists Have Played In Understanding Food. Organized Around The Sometimes Elusive Concept Of Cuisine And The Public Discourse - On Gastronomy, Nutrition, Sustainability, And Culinary Skills - That Surrounds It, This Practical Guide To Anthropological Method And Theory Brings Order And Insight To Our Changing Relationship With Food.--pub. Desc. Introduction -- Setting The Anthropological Table -- Part 1. Edibility -- Omnivorousness: Defining Food -- Part 2. Ingredients -- Settled Ingredients: Domestic Food Production -- Mobile Ingredients: Global Food Production -- Part 3. Cooking -- Cooks And Kitchens -- Recipes And Dishes -- Part 4. Eating -- Eating-in: Commensality And Gastro-politics -- Eating-out And Gastronomy -- Part 5. Digesting -- Gastro-anomie: Global Indigestion -- Local Digestion: Making The Global At Home -- Epilogue: Leftovers To Takeaway. Gillian Crowther. Includes Bibliographical References (pages 285-311) And Index.",
      "synopsis": "Humans Have An Appetite For Food, And Anthropology - As The Study Of Human Beings, Their Culture, And Society - Has An Interest In The Role Of Food. From Ingredients And Recipes To Meals And Menus Across Time And Space, Eating Culture Is A Highly Engaging Overview That Illustrates The Important Role That Anthropology And Anthropologists Have Played In Understanding Food. Organized Around The Sometimes Elusive Concept Of Cuisine And The Public Discourse - On Gastronomy, Nutrition, Sustainability, And Culinary Skills - That Surrounds It, This Practical Guide To Anthropological Method And Theory Brings Order And Insight To Our Changing Relationship With Food.--pub. Desc. Introduction -- Setting The Anthropological Table -- Part 1. Edibility -- Omnivorousness: Defining Food -- Part 2. Ingredients -- Settled Ingredients: Domestic Food Production -- Mobile Ingredients: Global Food Production -- Part 3. Cooking -- Cooks And Kitchens -- Recipes And Dishes -- Part 4. Eating -- Eating-in: Commensality And Gastro-politics -- Eating-out And Gastronomy -- Part 5. Digesting -- Gastro-anomie: Global Indigestion -- Local Digestion: Making The Global At Home -- Epilogue: Leftovers To Takeaway. Gillian Crowther. Includes Bibliographical References (pages 285-311) And Index.",
      "subjects": [
        "Food--Social aspects",
        "Nutritional anthropology",
        "Food habits",
        "Food preferences",
        "Ethnology--Fieldwork",
        "Nahrung",
        "Ernährungsgewohnheit",
        "GN407 .C76 2013",
        "394.1/2"
      ],
      "authors": [
        "Crowther, Gillian"
      ],
      "isbn13": "9781442604650",
      "msrp": "42.95",
      "edition": "1",
      "binding": "Paperback",
      "isbn": "1442604654",
      "language": "en",
      "dimensions": "Height: 9.28 Inches, Length: 7.5 Inches, Weight: 1.3668660244 Pounds, Width: 0.78 Inches",
      "pages": 360
    },
    {
      "title": "Will Save the Galaxy for Food",
      "image": "https://images.isbndb.com/covers/28/34/9781506702834.jpg",
      "title_long": "Will Save the Galaxy for Food",
      "date_published": "2017",
      "publisher": "Dark Horse Books",
      "authors": [
        "Croshaw, Yahtzee"
      ],
      "isbn13": "9781506702834",
      "edition": "Clr Csm",
      "binding": "Paperback",
      "isbn": "150670283X",
      "language": "en",
      "dimensions": "Height: 8.98 Inches, Length: 5.99 Inches, Weight: 0.7 Pounds, Width: 0.75 Inches",
      "pages": 232
    },
    {
      "title": "Fast Food Nation: The Dark Side of the All-American Meal",
      "image": "https://images.isbndb.com/covers/03/30/9780547750330.jpg",
      "title_long": "Fast Food Nation: The Dark Side of the All-American Meal",
      "date_published": "2012",
      "publisher": "Mariner Books",
      "synopsis": "<p><i>New York Times</i> Bestseller,&nbsp;</p>\n<p>&nbsp;With a New Afterword</p>\n<p>“Schlosser has a flair for dazzling scene-setting and an arsenal of startling facts . . . <i>Fast Food Nation</i> points the way but, to resurrect an old fast food slogan, the choice is yours.”—<i>Los Angeles Times</i></p>\n<p>In 2001, <i>Fast Food Nation</i> was published to critical acclaim and became an international bestseller. Eric Schlosser’s exposé revealed how the fast food industry has altered the landscape of America, widened the gap between rich and poor, fueled an epidemic of obesity, and transformed food production throughout the world. The book changed the way millions of people think about what they eat and helped to launch today’s food movement.</p>\n<p>In a new afterword for this edition, Schlosser discusses the growing interest in local and organic food, the continued exploitation of poor workers by the food industry, and the need to ensure that every American has access to good, healthy, affordable food. <i>Fast Food Nation</i> is as relevant today as it was a decade ago. The book inspires readers to look beneath the surface of our food system, consider its impact on society and, most of all, think for themselves.</p>\n<p>“As disturbing as it is irresistible . . . Exhaustively researched, frighteningly convincing . . . channeling the spirits of Upton Sinclair and Rachel Carson.”—<i>San Francisco Chronicle</i></p>\n<p>“Schlosser shows how the fast food industry conquered both appetite and landscape.”—<i>The New Yorker</i></p>\n<p>Eric Schlosser is a contributing editor for the <i>Atlantic</i> and the author of <i>Fast Food Nation</i>, <i>Reefer Madness</i>, and <i>Chew on This</i> (with Charles Wilson).</p>",
      "overview": "<p><i>New York Times</i> Bestseller,&nbsp;</p>\n<p>&nbsp;With a New Afterword</p>\n<p>“Schlosser has a flair for dazzling scene-setting and an arsenal of startling facts . . . <i>Fast Food Nation</i> points the way but, to resurrect an old fast food slogan, the choice is yours.”—<i>Los Angeles Times</i></p>\n<p>In 2001, <i>Fast Food Nation</i> was published to critical acclaim and became an international bestseller. Eric Schlosser’s exposé revealed how the fast food industry has altered the landscape of America, widened the gap between rich and poor, fueled an epidemic of obesity, and transformed food production throughout the world. The book changed the way millions of people think about what they eat and helped to launch today’s food movement.</p>\n<p>In a new afterword for this edition, Schlosser discusses the growing interest in local and organic food, the continued exploitation of poor workers by the food industry, and the need to ensure that every American has access to good, healthy, affordable food. <i>Fast Food Nation</i> is as relevant today as it was a decade ago. The book inspires readers to look beneath the surface of our food system, consider its impact on society and, most of all, think for themselves.</p>\n<p>“As disturbing as it is irresistible . . . Exhaustively researched, frighteningly convincing . . . channeling the spirits of Upton Sinclair and Rachel Carson.”—<i>San Francisco Chronicle</i></p>\n<p>“Schlosser shows how the fast food industry conquered both appetite and landscape.”—<i>The New Yorker</i></p>\n<p>Eric Schlosser is a contributing editor for the <i>Atlantic</i> and the author of <i>Fast Food Nation</i>, <i>Reefer Madness</i>, and <i>Chew on This</i> (with Charles Wilson).</p>",
      "authors": [
        "Schlosser, Eric"
      ],
      "isbn13": "9780547750330",
      "msrp": "15.95",
      "edition": "Revised ed.",
      "binding": "Paperback",
      "isbn": "0547750331",
      "language": "en",
      "dimensions": "Height: 8 Inches, Length: 5.3125 Inches, Weight: 0.7 Pounds, Width: 0.915 Inches",
      "pages": 384
    },
	  {
		"title": "Writing Fiction: A Guide to Narrative Craft (9th Edition)",
		"image": "https://images.isbndb.com/covers/31/65/9780321923165.jpg",
		"title_long": "Writing Fiction: A Guide to Narrative Craft (9th Edition)",
		"date_published": "2014",
		"publisher": "Pearson",
		"synopsys": "This Ninth Edition Explores The Elements Of Fiction, Providing Practical Writing Techniques And Concrete Examples. Written In A Tone That Is Personal And Non-prescriptive, The Text Encourages Students To Develop Proficiency Through Each Step Of The Writing Process, Offering An Abundance Of Exercises Designed To Spur Writing And Creativity. The Text Also Integrates Diverse, Contemporary Short Stories In The Belief That The Reading Of Inspiring Fiction Goes Hand-in-hand With The Writing Of Fresh And Exciting Stories. Whatever Works : The Writing Process -- Seeing Is Believing : Showing And Telling -- Building Character : Characterization, Part I -- The Flesh Made Word : Characterization, Part Ii -- Far, Far Away : Fictional Place -- Long Ago : Fictional Time -- The Tower And The Net : Story Form, Plot, And Structure -- Call Me Ishmael : Point Of View -- Play It Again, Sam : Revision. Janet Burroway, Florida State University ; With Elizabeth Stuckey-french, Florida State University ; Ned Stuckey-french, Florida State University. Previous Edition: 2011. Includes Bibliographical References And Index.",
		"synopsis": "This Ninth Edition Explores The Elements Of Fiction, Providing Practical Writing Techniques And Concrete Examples. Written In A Tone That Is Personal And Non-prescriptive, The Text Encourages Students To Develop Proficiency Through Each Step Of The Writing Process, Offering An Abundance Of Exercises Designed To Spur Writing And Creativity. The Text Also Integrates Diverse, Contemporary Short Stories In The Belief That The Reading Of Inspiring Fiction Goes Hand-in-hand With The Writing Of Fresh And Exciting Stories. Whatever Works : The Writing Process -- Seeing Is Believing : Showing And Telling -- Building Character : Characterization, Part I -- The Flesh Made Word : Characterization, Part Ii -- Far, Far Away : Fictional Place -- Long Ago : Fictional Time -- The Tower And The Net : Story Form, Plot, And Structure -- Call Me Ishmael : Point Of View -- Play It Again, Sam : Revision. Janet Burroway, Florida State University ; With Elizabeth Stuckey-french, Florida State University ; Ned Stuckey-french, Florida State University. Previous Edition: 2011. Includes Bibliographical References And Index.",
		"subjects": [
		  "Technique",
		  "Fiction",
		  "Creative writing",
		  "Narration (Rhetoric)",
		  "Authorship",
		  "Creative writing guides",
		  "Literary Criticism",
		  "Textbooks",
		  "Composition & Creative Writing - Fiction",
		  "Literary Criticism & Collections / General",
		  "General",
		  "Fiction, technique",
		  "Fiction, authorship",
		  "Narration (rhetoric)",
		  "Authorship, handbooks, manuals, etc."
		],
		"authors": [
		  "Burroway, Janet",
		  "Stuckey-French, Elizabeth",
		  "Stuckey-French, Ned"
		],
		"isbn13": "9780321923165",
		"msrp": "113.32",
		"edition": "9",
		"binding": "Paperback",
		"isbn": "0321923162",
		"language": "en",
		"dimensions": "Height: 8.9 Inches, Length: 6 Inches, Weight: 1.11112980048 Pounds, Width: 0.9 Inches",
		"pages": 384
	  },
	  {
		"title": "The Norton Anthology of Short Fiction (Shorter Eighth Edition)",
		"image": "https://images.isbndb.com/covers/77/63/9780393937763.jpg",
		"title_long": "The Norton Anthology of Short Fiction (Shorter Eighth Edition)",
		"date_published": "2015",
		"publisher": "W. W. Norton & Company",
		"authors": [],
		"isbn13": "9780393937763",
		"edition": "Shorter Eighth",
		"binding": "Paperback",
		"isbn": "0393937763",
		"language": "en",
		"dimensions": "Height: 9.1999816 Inches, Length: 5.999988 Inches, Weight: 1.66889932334 Pounds, Width: 1.0999978 Inches",
		"pages": 1024
	  },
	  {
		"title": "No Knives in the Kitchens of This City: A Novel (Hoopoe Fiction)",
		"image": "https://images.isbndb.com/covers/78/12/9789774167812.jpg",
		"title_long": "No Knives in the Kitchens of This City: A Novel (Hoopoe Fiction)",
		"date_published": "2016",
		"publisher": "Hoopoe",
		"synopsys": "In The Once Beautiful City Of Aleppo, One Syrian Family Descends Into Tragedy And Ruin Between The 1960s And 2000s. Irrepressible Sawsan Flirts With Militias, The Ruling Party, And Finally Religion, Seeking But Never Finding Salvation. She And Her Siblings And Mother Are Slowly Choked In Violence And Decay, As Their Lives Are Plundered By A Brutal Regime. Khaled Khalifa ; Translated By Leri Price. Translated From The Arabic. International Prize For Arabic Fiction, Shortlist, 2014 Naguib Mahfouz Medal For Literature, 2013",
		"synopsis": "In The Once Beautiful City Of Aleppo, One Syrian Family Descends Into Tragedy And Ruin Between The 1960s And 2000s. Irrepressible Sawsan Flirts With Militias, The Ruling Party, And Finally Religion, Seeking But Never Finding Salvation. She And Her Siblings And Mother Are Slowly Choked In Violence And Decay, As Their Lives Are Plundered By A Brutal Regime. Khaled Khalifa ; Translated By Leri Price. Translated From The Arabic. International Prize For Arabic Fiction, Shortlist, 2014 Naguib Mahfouz Medal For Literature, 2013",
		"authors": [
		  "Khalifa, Khaled"
		],
		"isbn13": "9789774167812",
		"msrp": "16.95",
		"edition": "Translation",
		"binding": "Paperback",
		"isbn": "9774167813",
		"language": "ar",
		"dimensions": "Height: 5.1 Inches, Length: 7.9 Inches, Weight: 0.5 Pounds, Width: 0.7 Inches",
		"pages": 224
	  },
	  {
		"title": "The Crying of Lot 49 (Perennial Fiction Library)",
		"image": "https://images.isbndb.com/covers/30/76/9780060913076.jpg",
		"title_long": "The Crying of Lot 49 (Perennial Fiction Library)",
		"date_published": "2006",
		"publisher": "Harper Perennial Modern Classics",
		"synopsys": "<p><P>The highly original satire about Oedipa Maas, a woman who finds herself enmeshed in a worldwide conspiracy, meets some extremely interesting characters, and attains a not inconsiderable amount of self knowledge.</p>",
		"synopsis": "<p><P>The highly original satire about Oedipa Maas, a woman who finds herself enmeshed in a worldwide conspiracy, meets some extremely interesting characters, and attains a not inconsiderable amount of self knowledge.</p>",
		"subjects": [
		  "Fiction"
		],
		"authors": [
		  "Pynchon, Thomas"
		],
		"isbn13": "9780060913076",
		"msrp": "12.99",
		"edition": "1st Perennial Fiction Library Edition",
		"binding": "Paperback",
		"isbn": "006091307X",
		"language": "en",
		"dimensions": "Height: 0.4 Inches, Length: 8.2 Inches, Weight: 0.29 Pounds, Width: 5.3 Inches",
		"pages": 160
	  },
	  {
		"title": "Making Shapely Fiction",
		"image": "https://images.isbndb.com/covers/12/41/9780393321241.jpg",
		"title_long": "Making Shapely Fiction",
		"date_published": "1991",
		"publisher": "W. W. Norton & Company",
		"synopsys": "<p>A deft analysis and appreciation of fiction&#151;what makes it work and what can make it fail.</p>",
		"synopsis": "<p><b>A deft analysis and appreciation of fiction-what makes it work and what can make it fail.</b></p><p>Here is a book about the craft of writing fiction that is thoroughly useful from the first to the last page-whether the reader is a beginner, a seasoned writer, or a teacher of writing. Jerome Stern maintains that learning to write spontaneously is the first step to writing well. You will see how a work takes form and shape once you grasp the principles of momentum, tension, and immediacy. Tension, Stern says, is the mother of fiction. When tension and immediacy combine, the story begins. Dialogue and action, beginnings and endings, the true meaning of write what you know, and a memorable listing of don'ts for fiction writers are all covered. A special section features an Alphabet for Writers: entries range from Accuracy to Zigzag, with enlightening comments about such matters as Cliffhangers, Point of View, Irony, and Transitions.</p>                        <p>Beginning as well as seasoned writers will find inspiration and valuable guidance in Stern's guide to the basic principles of fiction writing. This critically acclaimed reference stresses the importance of finding spontaneity and the writer's own personal path to creative expression.</p>",
		"overview": "<p><b>A deft analysis and appreciation of fiction-what makes it work and what can make it fail.</b></p><p>Here is a book about the craft of writing fiction that is thoroughly useful from the first to the last page-whether the reader is a beginner, a seasoned writer, or a teacher of writing. Jerome Stern maintains that learning to write spontaneously is the first step to writing well. You will see how a work takes form and shape once you grasp the principles of momentum, tension, and immediacy. Tension, Stern says, is the mother of fiction. When tension and immediacy combine, the story begins. Dialogue and action, beginnings and endings, the true meaning of write what you know, and a memorable listing of don'ts for fiction writers are all covered. A special section features an Alphabet for Writers: entries range from Accuracy to Zigzag, with enlightening comments about such matters as Cliffhangers, Point of View, Irony, and Transitions.</p>                        <p>Beginning as well as seasoned writers will find inspiration and valuable guidance in Stern's guide to the basic principles of fiction writing. This critically acclaimed reference stresses the importance of finding spontaneity and the writer's own personal path to creative expression.</p>",
		"subjects": [
		  "Fiction Writing"
		],
		"authors": [
		  "Stern, Jerome"
		],
		"isbn13": "9780393321241",
		"msrp": "11.36",
		"edition": "1/29/01",
		"binding": "Paperback",
		"isbn": "039332124X",
		"language": "en",
		"dimensions": "Height: 8.2999834 Inches, Length: 5.499989 Inches, Weight: 0.5621787681 Pounds, Width: 0.7999984 Inches",
		"pages": 270
	  },
	  {
		"title": "Literature: Reading Fiction, Poetry, and Drama",
		"image": "https://images.isbndb.com/covers/42/61/9780073124261.jpg",
		"title_long": "Literature: Reading Fiction, Poetry, and Drama",
		"date_published": "2007",
		"publisher": "McGraw Hill",
		"authors": [
		  "Robert DiYanni"
		],
		"isbn13": "9780073124261",
		"msrp": "106.56",
		"edition": "6th",
		"binding": "Hardcover",
		"isbn": "0073124265",
		"language": "en",
		"dimensions": "Height: 2.3 Inches, Length: 9.3 Inches, Weight: 4 Pounds, Width: 6.5 Inches",
		"pages": 2235
	  },
	  {
		"title": "The Scribner Anthology of Contemporary Short Fiction: 50 North American Stories Since 1970 (Touchstone Books (Paperback))",
		"image": "https://images.isbndb.com/covers/22/79/9781416532279.jpg",
		"title_long": "The Scribner Anthology of Contemporary Short Fiction: 50 North American Stories Since 1970 (Touchstone Books (Paperback))",
		"date_published": "2007",
		"publisher": "Scribner",
		"synopsys": "An Updated Edition Of Top-selected Short Fictional Works Features A Spectrum Of Stylistically And Culturally Diverse U.s. And Canadian Authors. Introduction / Rosellen Brown -- Sarah Cole: A Type Of Love Story / Russell Banks -- The School / Donald Barthelme -- The Hermit's Story / Rick Bass -- The Fireman's Wife / Richard Bausch -- The Disappeared / Charles Baxter -- Silver Water / Amy Bloom -- Caviar / T. C. Boyle -- The Ceiling / Kevin Brockmeier -- Jealous Husband Returns In Form Of Parrot / Robert Olen Butler -- Never Marry A Mexican / Sandra Cisneros -- Relief / Peter Ho Davies -- After Rosa Parks / Janet Desaulniers -- Nilda / Junot Díaz -- The Caretaker / Anthony Doerr -- We Didn't / Stuart Dybek -- Twilight Of The Superheroes / Deborah Eisenberg -- Communist / Richard Ford -- Tiny, Smiling Daddy / Mary Gaitskill -- Winners On The Pass Line / Dagoberto Gilb -- Wickedness / Ron Hansen -- A Real Doll / A.m. Holmes -- How Far She Went / Mary Hood -- Car Crash While Hitchhiking / Denis Johnson -- Marie / Edward P. Jones -- The Pugilist At Rest / Thom Jones -- Girl / Jamaica Kincaid -- A Temporary Matter / Jhumpa Lahiri -- Territory / David Leavitt -- Stone Animals / Kelly Link -- The Kind Of Light That Shines On Texas / Reginald Mcknight -- The Secret Goldfish / David Means -- Lust / Susan Minot -- Boys / Rick Moody -- The Management Of Grief / Bharati Mukherjee -- Female Trouble / Antonya Nelson -- The Translation / Joyce Carol Oates -- The Things They Carried / Tim O'brien -- Orientation / Daniel Orozco -- Pilgrims / Julie Orringer -- Brownies / Zz Packer -- The Half-skinned Steer / E. Annie Proulx -- The Cavemen In The Hedges / Stacey Richter -- Sea Oak / George Saunders -- My Shape / Joan Silber -- Tony's Story / Leslie Marmon Silko -- The Way We Live Now / Susan Sontag -- Two Kinds / Amy Tan -- Xmas, Jamaica Plain / Melanie Rae Thon -- Nineteen Fifty-five / Alice Walker -- The Rest Of Her Life / Steve Yarbrough. Edited By Lex Williford And Michael Martone. A Touchstone Book.",
		"synopsis": "An Updated Edition Of Top-selected Short Fictional Works Features A Spectrum Of Stylistically And Culturally Diverse U.s. And Canadian Authors. Introduction / Rosellen Brown -- Sarah Cole: A Type Of Love Story / Russell Banks -- The School / Donald Barthelme -- The Hermit's Story / Rick Bass -- The Fireman's Wife / Richard Bausch -- The Disappeared / Charles Baxter -- Silver Water / Amy Bloom -- Caviar / T. C. Boyle -- The Ceiling / Kevin Brockmeier -- Jealous Husband Returns In Form Of Parrot / Robert Olen Butler -- Never Marry A Mexican / Sandra Cisneros -- Relief / Peter Ho Davies -- After Rosa Parks / Janet Desaulniers -- Nilda / Junot Díaz -- The Caretaker / Anthony Doerr -- We Didn't / Stuart Dybek -- Twilight Of The Superheroes / Deborah Eisenberg -- Communist / Richard Ford -- Tiny, Smiling Daddy / Mary Gaitskill -- Winners On The Pass Line / Dagoberto Gilb -- Wickedness / Ron Hansen -- A Real Doll / A.m. Holmes -- How Far She Went / Mary Hood -- Car Crash While Hitchhiking / Denis Johnson -- Marie / Edward P. Jones -- The Pugilist At Rest / Thom Jones -- Girl / Jamaica Kincaid -- A Temporary Matter / Jhumpa Lahiri -- Territory / David Leavitt -- Stone Animals / Kelly Link -- The Kind Of Light That Shines On Texas / Reginald Mcknight -- The Secret Goldfish / David Means -- Lust / Susan Minot -- Boys / Rick Moody -- The Management Of Grief / Bharati Mukherjee -- Female Trouble / Antonya Nelson -- The Translation / Joyce Carol Oates -- The Things They Carried / Tim O'brien -- Orientation / Daniel Orozco -- Pilgrims / Julie Orringer -- Brownies / Zz Packer -- The Half-skinned Steer / E. Annie Proulx -- The Cavemen In The Hedges / Stacey Richter -- Sea Oak / George Saunders -- My Shape / Joan Silber -- Tony's Story / Leslie Marmon Silko -- The Way We Live Now / Susan Sontag -- Two Kinds / Amy Tan -- Xmas, Jamaica Plain / Melanie Rae Thon -- Nineteen Fifty-five / Alice Walker -- The Rest Of Her Life / Steve Yarbrough. Edited By Lex Williford And Michael Martone. A Touchstone Book.",
		"overview": "<p>Selected from a survey of more than five hundred English professors, short story writers, and novelists, this revised and updated second edition features fifty remarkable stories written by a wide spectrum of stylistically and culturally diverse authors.</p>\n<p>Russell Banks - Donald Barthelme - Rick Bass - Richard Bausch - Charles Baxter - Amy Bloom - T. C. Boyle - Kevin Brockmeier - Robert Olen Butler - Sandra Cisneros - Peter Ho Davies - Janet Desaulniers - Junot Diaz - Anthony Doerr - Stuart Dybek - Deborah Eisenberg - Richard Ford - Mary Gaitskill - Dagoberto Gilb - Ron Hansen - A. M. Homes - Mary Hood - Denis Johnson - Edward P. Jones - Thom Jones - Jamaica Kincaid - Jhumpa Lahiri - David Leavitt - Kelly Link - Reginald McKnight - David Means - Susan Minot - Rick Moody - Bharati Mukherjee - Antonya Nelson - Joyce Carol Oates - Tim O'Brien - Daniel Orozco - Julie Orringer - ZZ Packer - E. Annie Proulx - Stacey Richter - George Saunders - Joan Silber - Leslie Marmon Silko - Susan Sontag - Amy Tan - Melanie Rae Thon - Alice Walker - Steve Yarbrough</p>",
		"subjects": [
		  "Short stories, American",
		  "Short stories, Canadian",
		  "American fiction",
		  "American fiction--20th century",
		  "Canadian fiction",
		  "Canadian fiction--20th century",
		  "American fiction--21st century",
		  "Canadian fiction--21st century",
		  "Social life and customs",
		  "PS648.S5 S425 2007",
		  "813/.0108054"
		],
		"authors": [],
		"isbn13": "9781416532279",
		"msrp": "16.29",
		"edition": "2nd",
		"binding": "Paperback",
		"isbn": "1416532277",
		"language": "en",
		"dimensions": "Height: 9.25 Inches, Length: 6.125 Inches, Weight: 1.6 Pounds, Width: 1.3 Inches",
		"pages": 652
	  }
  ]
}

	useEffect(() => {
		let headers = {
			"Content-Type": 'application/json',
			"Authorization": '447877_326082662a0983a9e44b7df6377911cc'
		};

		console.log(searchValue);

		if(searchValue) {
			fetch(`https://api2.isbndb.com/books/${searchValue}?page=1&pageSize=5`, {headers: headers})
		.then(response => {
			setMovies(response);
			console.log(movies);
		})
		.then(json => {
			console.log(json)
		})
		.catch(error => {
			console.error('Error:', error)
		});
		}

		
	}, [movies,searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-blocks')
		);

		if (movieFavourites) {
			setBlocked(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const saveToLocalBlocked = (items) => {
		localStorage.setItem('react-movie-app-blocks', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.isbn13 !== movie.isbn13
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const addBlockedMovie = (movie) => {
		const newFavouriteList = [...blocked, movie];
		setBlocked(newFavouriteList);
		saveToLocalBlocked(newFavouriteList);
	};

	const removeBlockedMovie = (movie) => {
		const newFavouriteList = blocked.filter(
			(favourite) => favourite.isbn13 !== movie.isbn13
		);

		setBlocked(newFavouriteList);
		saveToLocalBlocked(newFavouriteList);
	};

	let randomNumbers = [Math.floor(Math.random() * 40), Math.floor(Math.random() * 40), Math.floor(Math.random() * 40),Math.floor(Math.random() * 40), Math.floor(Math.random() * 40)];
	let recList = [recs.books[0], recs.books[12], recs.books[33], recs.books[25], recs.books[randomNumbers[4]]];

	return (
		<div className='container-fluid movie-app'>
			
			<MovieListHeading heading='Book recommendations for you' />
			
			<div className='row'>
				<RecsList
					movies={recs.books}
					handleFavouritesClick={addFavouriteMovie}
					handleBlockedClick={addBlockedMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			
			<MovieListHeading heading='Liked List' />
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			
			<MovieListHeading heading='Blocked List' />
				<MovieList
					movies={blocked}
					handleFavouritesClick={removeBlockedMovie}
					favouriteComponent={RemoveFavourites}
				/>
			
		</div>
	);
};

export default App;
