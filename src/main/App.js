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
      "title": "Hotel, Restaurant & Travel Law (HOTEL, RESTAURANT AND TRAVEL LAW)",
      "image": "https://images.isbndb.com/covers/59/93/9780766835993.jpg",
      "title_long": "Hotel, Restaurant & Travel Law (HOTEL, RESTAURANT AND TRAVEL LAW)",
      "date_published": "2003",
      "publisher": "Cengage Learning",
      "synopsis": "<p>If you are involved or planning to be involved in the Travel and Hospitality industry as a manager or legal professional, you will find this book to be a valuable tool. Inside are discussions of the legal issues confronted by managers in the hotel, restaurant, travel and casino industries. The emphasis is on prevention of legal violations. By reading the book, managers can appreciate and identify what actions and precautions are necessary to avoid, or at least minimize the number of lawsuits. The book uses the case method, long recognized as a helpful approach to learning and debunking the often-complicated discipline of law. Readers will study decisions from actual cases in which hospitality establishments were sued and what decisions were made, as well as what legal precedents were cited. The 6th edition has been completely updated with the latest decisions as well as classic cases that remain persuasive today. The \"Preventive Tips for Managers\" feature at the end of each chapter reviews the key points and concepts addressed. A chapter on Casino Law, a developing branch of the Hospitality field is also featured in the new edition. This specialty area has numerous unique legal applications, particularly in light of the discussions in many communities toward expanding the availability of this type of entertainment.</p>",
      "overview": "<p>If you are involved or planning to be involved in the Travel and Hospitality industry as a manager or legal professional, you will find this book to be a valuable tool. Inside are discussions of the legal issues confronted by managers in the hotel, restaurant, travel and casino industries. The emphasis is on prevention of legal violations. By reading the book, managers can appreciate and identify what actions and precautions are necessary to avoid, or at least minimize the number of lawsuits. The book uses the case method, long recognized as a helpful approach to learning and debunking the often-complicated discipline of law. Readers will study decisions from actual cases in which hospitality establishments were sued and what decisions were made, as well as what legal precedents were cited. The 6th edition has been completely updated with the latest decisions as well as classic cases that remain persuasive today. The \"Preventive Tips for Managers\" feature at the end of each chapter reviews the key points and concepts addressed. A chapter on Casino Law, a developing branch of the Hospitality field is also featured in the new edition. This specialty area has numerous unique legal applications, particularly in light of the discussions in many communities toward expanding the availability of this type of entertainment.</p>",
      "authors": [
        "Morris, Karen",
        "Cournoyer, Norman",
        "Marshall, Anthony"
      ],
      "isbn13": "9780766835993",
      "msrp": "250.95",
      "edition": "6",
      "binding": "Hardcover",
      "isbn": "0766835995",
      "language": "en",
      "dimensions": "Height: 9.25 Inches, Length: 7.5 Inches, Weight: 2.7006627095 Pounds, Width: 1.25 Inches",
      "pages": 652
    },
    {
      "title": "Understanding Food: Principles and Preparation",
      "image": "https://images.isbndb.com/covers/71/51/9781133607151.jpg",
      "title_long": "Understanding Food: Principles and Preparation",
      "date_published": "2014",
      "publisher": "Cengage Learning",
      "authors": [
        "Brown, Amy Christine"
      ],
      "isbn13": "9781133607151",
      "msrp": "286.95",
      "edition": "5",
      "binding": "Hardcover",
      "isbn": "1133607152",
      "language": "en",
      "dimensions": "Height: 11.25 Inches, Length: 8.75 Inches, Weight: 3.6927428885 Pounds, Width: 1.25 Inches",
      "pages": 704
    },
    {
      "title": "A Beirut Anthology: Travel Writing through the Centuries",
      "image": "https://images.isbndb.com/covers/69/83/9789774166983.jpg",
      "title_long": "A Beirut Anthology: Travel Writing through the Centuries",
      "date_published": "2015",
      "publisher": "The American University in Cairo Press",
      "synopsys": "Beirut Has Seen Many Armies And Empires Come And Go, But The Legacy Of This Long History Is Not So Much In Surviving Monuments As In The Quintessential Levantine Spirit Of The People. A Commercial Hub Since The Days Of The Phoenicians, It Was A Centre Of Learning Under The Romans, Its Law School Preeminent In The Empire. Beirut Was The Point Of Entry To The Levant For Many Europeans And Americans Undertaking A Grand Tour Or A Pilgrimage To The Holy Land, And Visitors (whether Their Focus Was Piously Biblical Or More Prosaic) Recorded Their Impressions Of This Effervescent Port City Where East Rubs Against West. A Beirut Anthology Gathers The Choicest Of These, From Writers As Diverse As Alphonse De Lamartine And Mark Twain, Providing A Surprising And Vivid Glimpse Behind The Veil Of This Elusive And Alluring City. Edited By T. J. Gorton. Includes Bibliographical References And Index.",
      "synopsis": "Beirut Has Seen Many Armies And Empires Come And Go, But The Legacy Of This Long History Is Not So Much In Surviving Monuments As In The Quintessential Levantine Spirit Of The People. A Commercial Hub Since The Days Of The Phoenicians, It Was A Centre Of Learning Under The Romans, Its Law School Preeminent In The Empire. Beirut Was The Point Of Entry To The Levant For Many Europeans And Americans Undertaking A Grand Tour Or A Pilgrimage To The Holy Land, And Visitors (whether Their Focus Was Piously Biblical Or More Prosaic) Recorded Their Impressions Of This Effervescent Port City Where East Rubs Against West. A Beirut Anthology Gathers The Choicest Of These, From Writers As Diverse As Alphonse De Lamartine And Mark Twain, Providing A Surprising And Vivid Glimpse Behind The Veil Of This Elusive And Alluring City. Edited By T. J. Gorton. Includes Bibliographical References And Index.",
      "subjects": [
        "Description and travel",
        "In literature",
        "History",
        "DS89.B4 B457 2015",
        "956.9/25"
      ],
      "authors": [],
      "isbn13": "9789774166983",
      "msrp": "18.95",
      "edition": "1",
      "binding": "Hardcover",
      "isbn": "9774166981",
      "language": "ar",
      "dimensions": "Height: 4.9 Inches, Length: 6.6 Inches, Weight: 0.60406659788 Pounds, Width: 0.9 Inches",
      "pages": 168
    },
    {
      "title": "Krause's Food & the Nutrition Care Process",
      "image": "https://images.isbndb.com/covers/23/38/9781437722338.jpg",
      "title_long": "Krause's Food & the Nutrition Care Process",
      "date_published": "2011",
      "publisher": "Saunders",
      "synopsys": "The most respected nutrition text for more than 50 years, Krause's Food and the Nutrition Care Process delivers comprehensive and up-to-date information from respected educators and practitioners in the field. The latest recommendations include the new MyPlate guide, the Dietary Guidelines for Americans 2010, new and expanded chapters, and a large variety of tables, boxes, and pathophysiology algorithms, all providing need-to-know information with ease. New co-editor Janice L. Raymond joins L. Kathleen Mahan and Sylvia Escott-Stump and nearly 50 leading educators, researchers, and practitioners in writing a nutrition text that's ideal for use in class or everyday practice. \r\n\r\n",
      "synopsis": "The most respected nutrition text for more than 50 years, Krause's Food and the Nutrition Care Process delivers comprehensive and up-to-date information from respected educators and practitioners in the field. The latest recommendations include the new MyPlate guide, the Dietary Guidelines for Americans 2010, new and expanded chapters, and a large variety of tables, boxes, and pathophysiology algorithms, all providing need-to-know information with ease. New co-editor Janice L. Raymond joins L. Kathleen Mahan and Sylvia Escott-Stump and nearly 50 leading educators, researchers, and practitioners in writing a nutrition text that's ideal for use in class or everyday practice. \r\n\r\n",
      "overview": "<p>The most respected nutrition text for more than 50 years, <b>Krause's Food and the Nutrition Care Process</b> delivers comprehensive and up-to-date information from respected educators and practitioners in the field. The latest recommendations include the new <i>MyPlate</i> guide, the <i>Dietary Guidelines for Americans 2010</i>, new and expanded chapters, and a large variety of tables, boxes, and pathophysiology algorithms, all providing need-to-know information with ease. New co-editor Janice L. Raymond joins L. Kathleen Mahan and Sylvia Escott-Stump and nearly 50 leading educators, researchers, and practitioners in writing a nutrition text that's ideal for use in class or everyday practice.</p>\n<p>• <b>Expert contributors</b> include nearly 50 nationally recognized writers, researchers, and practitioners, each writing on their area of specialization.<br>\n• <b>Clear, logical organization</b> details each step of complete nutritional care from assessment to therapy.<br>\n• <b>UNIQUE!</b> <b>Pathophysiology algorithms</b> clarify the illness process and to ensure more effective care.<br>\n• <b><i>New Directions</i></b> <b>boxes</b> reflect the latest research in emerging areas in nutrition therapy.<br>\n• <b><i>Focus On</i></b> <b>boxes</b> provide additional detail on key chapter concepts.<br>\n• <b><i>Clinical Insight</i></b> <b>boxes</b> and <b><i>Clinical Scenarios</i></b> with detailed Sample Nutrition Diagnosis statements help ensure the most accurate and effective interventions in practice.<br>\n• <b>Key terms</b> listed at the beginning of each chapter and bolded within the text provide quick access to important nutrition terminology.<br>\n• <b>More than 1,000 self-assessment questions</b> on a companion Evolve website reinforce key textbook content.</p>\n<p>• <b>New recommendations</b> reflect a comprehensive approach to diet and nutrition that incorporates the USDA's <i>MyPlate</i> guide, the <i>Dietary Guidelines for Americans 2010</i>, and the <i>Eating Well with Canada's Food Guide</i> recommendations.<br>\n• <b>Reorganized table of contents</b> reinforces the Nutrition Care Process structure endorsed by the American Dietetic Association (ADA).<br>\n• <b><i>MNT for Thyroid Disorders</i> chapter</b> details important nutrition considerations for managing thyroid disorders.<br>\n• <b>New calcium and vitamin D Dietary Recommended Intakes (DRIs)</b> improve monitoring of nutrient intake.<br>\n• <b>Expanded <i>Nutrition in Aging</i> chapter</b> includes assessment and nutritional care guidelines for the growing elderly patient population.<br>\n• <b>Growth grids for children</b> detail proper patient nutrition during infancy and early childhood.<br>\n• <b>Extensively revised <i>MNT for Food Allergies</i> chapter</b> highlights the importance of food allergy management in clinical nutrition therapy.<br>\n• <b>Updated appendices</b> enhance assessment accuracy with the latest laboratory findings and normal values.<br>\n</p>",
      "subjects": [
        "Nutrition",
        "Diet Therapy",
        "Allied Health & Medical -> Medical -> Diet Therapy",
        "Allied Health & Medical -> Nursing -> Nutrition"
      ],
      "authors": [
        "Mahan MS  RD  CDE, L. Kathleen",
        "Raymond MS  RDN  CSG, Janice L",
        "Escott-Stump MA  RD  LDN, Sylvia"
      ],
      "isbn13": "9781437722338",
      "msrp": "165.0",
      "edition": "13th",
      "binding": "Hardcover",
      "isbn": "1437722334",
      "language": "en",
      "dimensions": "Height: 11.5 Inches, Length: 8.75 Inches, Weight: 1 Pounds, Width: 2 Inches",
      "pages": 1248
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
      "title": "Food Service Organizations: A Managerial and Systems Approach (8th Edition)",
      "image": "https://images.isbndb.com/covers/08/19/9780132620819.jpg",
      "title_long": "Food Service Organizations: A Managerial and Systems Approach (8th Edition)",
      "date_published": "2012",
      "publisher": "Pearson",
      "synopsis": "<p>Organized around the well-proven foodservice systems model, <i>FOOD SERVICE ORGANIZATIONS: A MANAGERIAL AND SYSTEMS APPROACH, 8/e</i> provides detailed and current information on how managers can optimally transform human, material, facility, and operational inputs into outputs of meals, customer satisfaction, employee satisfaction, and financial accountability. Blending theory and practice, it gives foodservice managers a strong empirical base for managing operations. After thoroughly introducing the model, it presents in-depth coverage of each functional subsystem: procurement, production, distribution, service, safety, sanitation, and maintenance. Next, readers master today’s most relevant leadership, communication, decision making, HR, financial, and marketing techniques. The book concludes with a full section on system outputs, including methods for evaluating them. This edition adds new coverage of sustainability; updated information on energy management and food safety; expanded coverage of marketing and globalization; and the latest dietary guidelines.</p>",
      "overview": "<p>Organized around the well-proven foodservice systems model, <i>FOOD SERVICE ORGANIZATIONS: A MANAGERIAL AND SYSTEMS APPROACH, 8/e</i> provides detailed and current information on how managers can optimally transform human, material, facility, and operational inputs into outputs of meals, customer satisfaction, employee satisfaction, and financial accountability. Blending theory and practice, it gives foodservice managers a strong empirical base for managing operations. After thoroughly introducing the model, it presents in-depth coverage of each functional subsystem: procurement, production, distribution, service, safety, sanitation, and maintenance. Next, readers master today’s most relevant leadership, communication, decision making, HR, financial, and marketing techniques. The book concludes with a full section on system outputs, including methods for evaluating them. This edition adds new coverage of sustainability; updated information on energy management and food safety; expanded coverage of marketing and globalization; and the latest dietary guidelines.</p>",
      "authors": [
        "Gregoire, Mary B."
      ],
      "isbn13": "9780132620819",
      "msrp": "178",
      "edition": "8",
      "binding": "Paperback",
      "isbn": "0132620812",
      "language": "en",
      "dimensions": "Height: 10.7 Inches, Length: 8.4 Inches, Weight: 2.2487150724 Pounds, Width: 0.8 Inches",
      "pages": 552
    },
    {
      "title": "Food Fundamentals",
      "image": "https://images.isbndb.com/covers/77/38/9780132747738.jpg",
      "title_long": "Food Fundamentals",
      "date_published": "2012",
      "publisher": "Pearson",
      "authors": [
        "McWilliams Ph.D.  R.D.  Professor Emeritus, Margaret"
      ],
      "isbn13": "9780132747738",
      "msrp": "193.32",
      "edition": "10",
      "binding": "Hardcover",
      "isbn": "0132747731",
      "language": "en",
      "dimensions": "Height: 11 Inches, Length: 1 Inches, Weight: 2.87923714172 Pounds, Width: 8.4 Inches",
      "pages": 528
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
      "title": "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
      "image": "https://images.isbndb.com/covers/97/16/9780544609716.jpg",
      "title_long": "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
      "date_published": "2015",
      "publisher": "Houghton Mifflin Harcourt",
      "synopsys": "Millions Of People Visit Whole30.com Every Month And Share Their Stories Of Weight Loss And Lifestyle Makeovers. Hundreds Of Thousands Of Them Have Read It Starts With Food, Which Explains The Science Behind The Program. At Last, The Whole30 Provides The Step-by-step, Recipe-by-recipe Guidebook That Will Allow Millions Of People To Experience The Transformation Of Their Entire Life In Just One Month.  Melissa And Dallas Hartwig's Critically-acclaimed Whole30 Program Has Helped Hundreds Of Thousands Of People Transform How They Think About Their Food, Bodies, And Lives. Their Approach Leads To Effortless Weight Loss And Better Health--along With Stunning Improvements In Sleep Quality, Energy Levels, Mood, And Self-esteem. Their First Book, The New York Times Best-selling It Starts With Food, Explained The Science Behind Their Life-changing Program. Now They Bring You The Whole30, A Stand-alone, Step-by-step Plan To Break Unhealthy Habits, Reduce Cravings, Improve Digestion, And Strengthen Your Immune System. The Whole30 Features More Than 100 Chef-developed Recipes, Like Chimichurri Beef Kabobs And Halibut With Citrus Ginger Glaze, Designed To Build Your Confidence In The Kitchen And Inspire Your Taste Buds. The Book Also Includes Real-life Success Stories, Community Resources, And An Extensive Faq To Give You The Support You Need On Your Journey To Food Freedom.--",
      "subjects": [
        "Nutrition",
        "Self-care, Health",
        "Diet therapy",
        "Food habits",
        "Popular works",
        "Weight loss",
        "Self-care, health",
        "COOKING / Health & Healing / General",
        "HEALTH & FITNESS / Nutrition",
        "HEALTH & FITNESS / Weight Loss",
        "COOKING / Health & Healing / Weight Control",
        "nyt:advice-how-to-and-miscellaneous=2015-05-10",
        "New York Times bestseller"
      ],
      "authors": [
        "Hartwig Urban, Melissa",
        "Hartwig, Dallas"
      ],
      "isbn13": "9780544609716",
      "msrp": "30",
      "edition": "1st Edition",
      "binding": "Hardcover",
      "isbn": "0544609719",
      "language": "en",
      "dimensions": "Height: 9 Inches, Length: 8 Inches, Weight: 2.96 Pounds, Width: 1.267 Inches",
      "pages": 432
    },
    {
      "title": "Fast Food Nation: The Dark Side Of The All-american Meal",
      "image": "https://images.isbndb.com/covers/85/84/9780060838584.jpg",
      "title_long": "Fast Food Nation: The Dark Side Of The All-american Meal",
      "date_published": 2005,
      "publisher": "Harper Perennial",
      "synopsys": "<p>journalist Schlosser Argues That The Fast Food Industry Has Triggered The Growth Of Malls In America's Landscape, Widened The Gap Between Rich And Poor, Fueled An Epidemic Of Obesity, And Propelled American Cultural Imperialism Abroad. He Discusses Facts About Food Production And Preparation, The Ingredients And Taste-enhancers In The Food, The Chains' Efforts To Reel In Young, Susceptible Consumers, And Other Unsettling Facts. <p>annotation &copy; Book News, Inc., Portland, Or</p> <h3>time Out New York</h3> <p>part Cultural History, Part Investigative Journalism And Part Polemic...intelligent And Highly Readable Critique....</p>",
      "subjects": [
        "politics",
        "health",
        "current events",
        "sociology",
        "McDonald's",
        "food",
        "American cooking",
        "social science",
        "popular culture",
        "cooking",
        "feeding behavior",
        "social aspects",
        "foods",
        "quality",
        "trade marks",
        "food industry",
        "health hazards",
        "food safety",
        "Voedingsgewoonten",
        "Fastfood",
        "Health & Fitness",
        "Media Studies",
        "Industria y comercio",
        "Restaurantes de comida rápida",
        "Cookery",
        "Cooking & Food",
        "Nonfiction",
        "Alimentos",
        "Cuisine américaine",
        "Fast food restaurants",
        "Food industry and trade",
        "Alimentos de conveniencia",
        "Convenience foods",
        "Food habits",
        "Diet",
        "Ernährungsgewohnheit",
        "Ess- und Trinksitte",
        "Ernährung",
        "Fast Food",
        "Lebensmittelindustrie",
        "Lebensmittelfälschung",
        "Convienience foods",
        "Large type books",
        "Comida de preparación rápida",
        "Comida basura",
        "Industria alimentaria"
      ],
      "authors": [
        "Schlosser",
        "Eric"
      ],
      "isbn13": "9780060838584",
      "binding": "Paperback",
      "isbn": "0060838582",
      "language": "en",
      "pages": 383
    },
    {
      "title": "Food Justice (Food, Health, and the Environment)",
      "image": "https://images.isbndb.com/covers/86/66/9780262518666.jpg",
      "title_long": "Food Justice (Food, Health, and the Environment)",
      "date_published": "2013",
      "publisher": "The MIT Press",
      "synopsis": "<p>In today's food system, farm workers face difficult and hazardous conditions,low-income neighborhoods lack supermarkets but abound in fast-food restaurants and liquor stores,food products emphasize convenience rather than wholesomeness, and the international reach of American fast-food franchises has been a major contributor to an epidemic of globesity.To combat these inequities and excesses, a movement for food justice has emerged in recent years seeking to transform the food system from seed to table. In <i>Food Justice</i>, Robert Gottlieb and Anupama Joshi tell the story of this emerging movement.</p><p>A food justice framework ensures that the benefits and risks of how food is grown and processed,transported, distributed, and consumed are shared equitably. Gottlieb and Joshi recount the history of food injustices and describe current efforts to change the system, including community gardens and farmer training in Holyoke, Massachusetts, youth empowerment through the Rethinkers in New Orleans, farm-to-school programs across the country, and the Los Angeles school system's elimination of sugary soft drinks from its cafeterias. And they tell how food activism has succeeded at the highest level: advocates waged a grassroots campaign that convinced the Obama White House to plant a vegetable garden. The first comprehensive inquiry into this emerging movement, <i>Food Justice</i> addresses the increasing disconnect between food and culture that has resulted from our highly industrialized food system.</p>",
      "overview": "<p>In today's food system, farm workers face difficult and hazardous conditions,low-income neighborhoods lack supermarkets but abound in fast-food restaurants and liquor stores,food products emphasize convenience rather than wholesomeness, and the international reach of American fast-food franchises has been a major contributor to an epidemic of globesity.To combat these inequities and excesses, a movement for food justice has emerged in recent years seeking to transform the food system from seed to table. In <i>Food Justice</i>, Robert Gottlieb and Anupama Joshi tell the story of this emerging movement.</p><p>A food justice framework ensures that the benefits and risks of how food is grown and processed,transported, distributed, and consumed are shared equitably. Gottlieb and Joshi recount the history of food injustices and describe current efforts to change the system, including community gardens and farmer training in Holyoke, Massachusetts, youth empowerment through the Rethinkers in New Orleans, farm-to-school programs across the country, and the Los Angeles school system's elimination of sugary soft drinks from its cafeterias. And they tell how food activism has succeeded at the highest level: advocates waged a grassroots campaign that convinced the Obama White House to plant a vegetable garden. The first comprehensive inquiry into this emerging movement, <i>Food Justice</i> addresses the increasing disconnect between food and culture that has resulted from our highly industrialized food system.</p>",
      "subjects": [
        "Ecology & Environmental Sciences",
        "Environmental Sciences"
      ],
      "authors": [
        "Gottlieb, Robert",
        "Joshi, Anupama"
      ],
      "isbn13": "9780262518666",
      "msrp": "10.02",
      "edition": "Reprint",
      "binding": "Paperback",
      "isbn": "026251866X",
      "language": "en",
      "dimensions": "Height: 9 Inches, Length: 6 Inches, Weight: 1.00089866948 Pounds, Width: 0.74 Inches",
      "pages": 320
    },
    {
      "title": "Food Safety: The Science of Keeping Food Safe",
      "image": "https://images.isbndb.com/covers/72/28/9781444337228.jpg",
      "title_long": "Food Safety: The Science of Keeping Food Safe",
      "date_published": "2012",
      "publisher": "Wiley-Blackwell",
      "synopsis": "<p>Food safety is a modern concept. Remarkably, it is only in the last 200 years that such concepts as foodborne germs, and the means of combating them (such as antiseptics and refrigeration), have been popularised. Yet in the 21st Century, consumers in the developed world do not accept that the food which they purchase and consume might carry a risk of making them ill â that our food should be safe is something we all take for granted.</p><p>Food safety is a multi-faceted subject, using microbiology, chemistry, standards and regulations and risk management to address issues involving bacterial pathogens, chemical contaminants, natural toxicants, additive safety, allergens and more. In <i>Food Safety: The Science of Keeping Food Safe</i>, Professor Ian C. Shaw introduces these topics with wit and practical wisdom, providing an accessible guide to a vibrant and constantly evolving subject. Each chapter proceeds from introductory concepts and builds towards a sophisticated treatment of the topic, allowing the reader to take what knowledge is required for understanding food safety at a range of levels.</p><p>Illustrated with photographs and examples throughout, this book is the ideal starting point for students and non-specialists seeking to learn about food safety issues, and an enjoyable and stylish read for those who already have an academic or professional background in the area.</p>",
      "overview": "<p>Food safety is a modern concept. Remarkably, it is only in the last 200 years that such concepts as foodborne germs, and the means of combating them (such as antiseptics and refrigeration), have been popularised. Yet in the 21st Century, consumers in the developed world do not accept that the food which they purchase and consume might carry a risk of making them ill â that our food should be safe is something we all take for granted.</p><p>Food safety is a multi-faceted subject, using microbiology, chemistry, standards and regulations and risk management to address issues involving bacterial pathogens, chemical contaminants, natural toxicants, additive safety, allergens and more. In <i>Food Safety: The Science of Keeping Food Safe</i>, Professor Ian C. Shaw introduces these topics with wit and practical wisdom, providing an accessible guide to a vibrant and constantly evolving subject. Each chapter proceeds from introductory concepts and builds towards a sophisticated treatment of the topic, allowing the reader to take what knowledge is required for understanding food safety at a range of levels.</p><p>Illustrated with photographs and examples throughout, this book is the ideal starting point for students and non-specialists seeking to learn about food safety issues, and an enjoyable and stylish read for those who already have an academic or professional background in the area.</p>",
      "subjects": [
        "Technology - General & Miscellaneous",
        "Engineering - General & Miscellaneous"
      ],
      "authors": [
        "Shaw, Ian C."
      ],
      "isbn13": "9781444337228",
      "msrp": "56.99",
      "edition": "1",
      "binding": "Paperback",
      "isbn": "144433722X",
      "language": "en",
      "dimensions": "Height: 9.5980123 Inches, Length: 6.700774 Inches, Weight: 0.00220462262 Pounds, Width: 0.75192763 Inches",
      "pages": 440
    },
	{
		"title": "Burning Down the House: Essays on Fiction",
		"image": "https://images.isbndb.com/covers/50/81/9781555975081.jpg",
		"title_long": "Burning Down the House: Essays on Fiction",
		"date_published": "2008",
		"publisher": "Graywolf Press",
		"synopsys": "A Collection Of Essays That Explore The Effects Of Contemporary Patterns Of Thought On American Fiction, Considering Topics Such As The Belief In Hell, The Demand For Happy Endings, And The Public Lying Of Politicians. Dysfunctional Narratives, Or Mistakes Were Made -- On Defamiliarization -- Against Epiphanies -- Talking Forks : Fiction And The Inner Life Of Objects -- Counterpointed Characterization -- Rhyming Action -- Maps And Legends Of Hell : Notes On Melodrama -- The Donald Barthelme Blues -- Stillness -- Regarding Happiness -- Sonya's Last Speech, Or, Double Voicing: An Essay In Sixteen Sections. Charles Baxter. Includes Bibliographical References.",
		"synopsis": "A Collection Of Essays That Explore The Effects Of Contemporary Patterns Of Thought On American Fiction, Considering Topics Such As The Belief In Hell, The Demand For Happy Endings, And The Public Lying Of Politicians. Dysfunctional Narratives, Or Mistakes Were Made -- On Defamiliarization -- Against Epiphanies -- Talking Forks : Fiction And The Inner Life Of Objects -- Counterpointed Characterization -- Rhyming Action -- Maps And Legends Of Hell : Notes On Melodrama -- The Donald Barthelme Blues -- Stillness -- Regarding Happiness -- Sonya's Last Speech, Or, Double Voicing: An Essay In Sixteen Sections. Charles Baxter. Includes Bibliographical References.",
		"subjects": [
		  "American fiction--History and criticism",
		  "American fiction--20th century--History and criticism",
		  "PS379 .B37 2008"
		],
		"authors": [
		  "Baxter, Charles"
		],
		"isbn13": "9781555975081",
		"msrp": "15.00",
		"edition": "New edition",
		"binding": "Paperback",
		"isbn": "1555975089",
		"language": "en",
		"dimensions": "Height: 8.259826 Inches, Length: 5.6598312 Inches, Weight: 0.73 Pounds, Width: 0.7700772 Inches",
		"pages": 288
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
		"title": "Literature and Its Writers: A Compact Introduction to Fiction, Poetry, and Drama",
		"image": "https://images.isbndb.com/covers/64/72/9781457606472.jpg",
		"title_long": "Literature and Its Writers: A Compact Introduction to Fiction, Poetry, and Drama",
		"date_published": "2012",
		"publisher": "Bedford/St. Martin's",
		"synopsis": "<p>Literature is a conversation&nbsp;- between writers and other writers, and between writers and readers. In <i>Literature and Its Writers</i>, Ann and Samuel Charters complement a rich and varied selection of stories, poems, and plays with an unparalleled array of commentaries about that literature by the writers themselves. Such writer talk inspires students to respond as it models ways for them to enter the conversation. In the sixth edition, the Charters continue to entice students to join the conversation, with adventurous and intriguing new literary works, more detailed coverage of literary elements, and more help with reading and writing.</p><p>This anthology is now available with video! Learn more about <i>VideoCentral for Literature</i>.</p>",
		"overview": "<p>Literature is a conversation&nbsp;- between writers and other writers, and between writers and readers. In <i>Literature and Its Writers</i>, Ann and Samuel Charters complement a rich and varied selection of stories, poems, and plays with an unparalleled array of commentaries about that literature by the writers themselves. Such writer talk inspires students to respond as it models ways for them to enter the conversation. In the sixth edition, the Charters continue to entice students to join the conversation, with adventurous and intriguing new literary works, more detailed coverage of literary elements, and more help with reading and writing.</p><p>This anthology is now available with video! Learn more about <i>VideoCentral for Literature</i>.</p>",
		"subjects": [
		  "Literature Anthologies - General & Miscellaneous"
		],
		"authors": [
		  "Charters, Ann",
		  "Charters, Samuel"
		],
		"isbn13": "9781457606472",
		"edition": "Sixth",
		"binding": "Paperback",
		"isbn": "145760647X",
		"language": "en",
		"dimensions": "Height: 9.23 Inches, Length: 6.05 Inches, Weight: 2.9 Pounds, Width: 1.87 Inches",
		"pages": 1792
	  },
	  {
		"title": "Exploring Literature: Writing and Arguing about Fiction, Poetry, Drama, and the Essay, 5th Edition",
		"image": "https://images.isbndb.com/covers/47/98/9780205184798.jpg",
		"title_long": "Exploring Literature: Writing and Arguing about Fiction, Poetry, Drama, and the Essay, 5th Edition",
		"date_published": "2020",
		"publisher": "Pearson",
		"synopsis": "<p><b>Exploring Literature: Writing and Arguing About Fiction, Drama, Poetry and the Essay, 5/e</b></p>\n<p><b>Frank Madden</b></p>\n<p>With engaging selections, provocative themes, and comprehensive coverage of the writing process, <i>Exploring Literature</i> combines practical writing instruction with a carefully selected anthology of classic and contemporary literature from around the world. Critical thinking is woven into every facet of its writing apparatus while guiding you through the process of crafting personal responses into persuasive arguments. Following five opening chapters dedicated to reading, writing, arguing, and researching about literature, theanthology is divided into five thematically-arranged sections that include contextual case studies, writing prompts, and sample student essays to help you approach literature with a critical eye and write thoughtful essays. <i>Exploring Literature</i> assembles stimulating literature and structured advice to create a valuable guide that will not only help you to write about literature, but to improve your writing and thinking processes in general.</p>\n<p><b>WHAT’S NEW IN THIS EDITION</b></p>\n<ul>\n<li>A new one-page “Primer on Punctuation” with basic rules and examples for the comma, semi-colon, colon, and apostrophe as part of the section on proofreading–adjoining the Basic Rules for a Literary Essay.</li>\n<li>Two new 10-minute dramas: Galsworthy “The Sun” (Faith and Doubt); and Anton Chekhov, “Swan Song.”</li>\n<li>Added four new selections to the thematic section including Marjane Satrapi from “Persepolis”–a work of graphic nonfiction.</li>\n<li>Added a mini-theme to Culture and Identity Tennessee Williams <i>The Glass Menagerie</i> paired with/against a Christopher Durang parody <i>For Whom the Southern Belle Tolls.</i></li>\n<li>Added two student essays.</li>\n</ul>\n<p>“<i>One of the greatest strengths of this book is the author’s tone and style. He is very down-to-earth and encouraging . . . you can tell that Madden is an experienced teacher because he anticipates common questions and problems . . . he bridges personal response to writing a critical essay quite well</i>.”</p>\n<p>Professor Daniel Schierenbeck - University of Central Missouri</p>\n<p>“<i>The writing coverage is this text’s strongest element. From the process-based writing at the outset to the prompts and questions at the end of each reading, the book gives instructors more than sufficient material to work with and gives students a very healthy, well-rounded set of tools and ideas to create critical essays. The student essays are very good . . grounded enough and real enough that students can connect with them and use them as guides</i>.”</p>\n<p>Professor Mark Sheffield Brown - Illinois Valley Community College</p>",
		"overview": "<p><b>Exploring Literature: Writing and Arguing About Fiction, Drama, Poetry and the Essay, 5/e</b></p>\n<p><b>Frank Madden</b></p>\n<p>With engaging selections, provocative themes, and comprehensive coverage of the writing process, <i>Exploring Literature</i> combines practical writing instruction with a carefully selected anthology of classic and contemporary literature from around the world. Critical thinking is woven into every facet of its writing apparatus while guiding you through the process of crafting personal responses into persuasive arguments. Following five opening chapters dedicated to reading, writing, arguing, and researching about literature, theanthology is divided into five thematically-arranged sections that include contextual case studies, writing prompts, and sample student essays to help you approach literature with a critical eye and write thoughtful essays. <i>Exploring Literature</i> assembles stimulating literature and structured advice to create a valuable guide that will not only help you to write about literature, but to improve your writing and thinking processes in general.</p>\n<p><b>WHAT’S NEW IN THIS EDITION</b></p>\n<ul>\n<li>A new one-page “Primer on Punctuation” with basic rules and examples for the comma, semi-colon, colon, and apostrophe as part of the section on proofreading–adjoining the Basic Rules for a Literary Essay.</li>\n<li>Two new 10-minute dramas: Galsworthy “The Sun” (Faith and Doubt); and Anton Chekhov, “Swan Song.”</li>\n<li>Added four new selections to the thematic section including Marjane Satrapi from “Persepolis”–a work of graphic nonfiction.</li>\n<li>Added a mini-theme to Culture and Identity Tennessee Williams <i>The Glass Menagerie</i> paired with/against a Christopher Durang parody <i>For Whom the Southern Belle Tolls.</i></li>\n<li>Added two student essays.</li>\n</ul>\n<p>“<i>One of the greatest strengths of this book is the author’s tone and style. He is very down-to-earth and encouraging . . . you can tell that Madden is an experienced teacher because he anticipates common questions and problems . . . he bridges personal response to writing a critical essay quite well</i>.”</p>\n<p>Professor Daniel Schierenbeck - University of Central Missouri</p>\n<p>“<i>The writing coverage is this text’s strongest element. From the process-based writing at the outset to the prompts and questions at the end of each reading, the book gives instructors more than sufficient material to work with and gives students a very healthy, well-rounded set of tools and ideas to create critical essays. The student essays are very good . . grounded enough and real enough that students can connect with them and use them as guides</i>.”</p>\n<p>Professor Mark Sheffield Brown - Illinois Valley Community College</p>",
		"subjects": [
		  "Reader-response Criticism",
		  "Books And Reading",
		  "Literature",
		  "History And Criticism",
		  "Theory, Etc"
		],
		"authors": [
		  "Madden, Frank"
		],
		"isbn13": "9780205184798",
		"msrp": "140.4",
		"edition": "5th",
		"binding": "Paperback",
		"isbn": "0205184790",
		"language": "en",
		"dimensions": "Height: 1.3 Inches, Length: 9 Inches, Weight: 2.1384839414 Pounds, Width: 6.4 Inches",
		"pages": 1325
	  },
	  {
		"title": "An Anthology of Colonial and Postcolonial Short Fiction",
		"image": "https://images.isbndb.com/covers/88/10/9780618318810.jpg",
		"title_long": "An Anthology of Colonial and Postcolonial Short Fiction",
		"date_published": "2006",
		"publisher": "Cengage Learning",
		"synopsys": "<p><P>This anthology offers a balanced approach to colonial and postcolonial literature through a rich tapestry of short stories by both British colonizers and affected indigenous people. Organized by region, the compelling stories reflect the evolution of colonialism from the seventeenth to the twentieth century. Students explore the insights and emotions on both sides of the imperial fence, while learning about the hardships and triumphs of the colonial experience. A thorough pedagogical apparatus includes historical introductions, author headnotes, and reading questions that provide students with tools to approach each selection in an informed manner. Students come to appreciate how fiction both supported and questioned the basis and results of colonialism.</p>",
		"synopsis": "<p><P>This anthology offers a balanced approach to colonial and postcolonial literature through a rich tapestry of short stories by both British colonizers and affected indigenous people. Organized by region, the compelling stories reflect the evolution of colonialism from the seventeenth to the twentieth century. Students explore the insights and emotions on both sides of the imperial fence, while learning about the hardships and triumphs of the colonial experience. A thorough pedagogical apparatus includes historical introductions, author headnotes, and reading questions that provide students with tools to approach each selection in an informed manner. Students come to appreciate how fiction both supported and questioned the basis and results of colonialism.</p>",
		"subjects": [
		  "Language Arts &amp; Disciplines",
		  "Literacy"
		],
		"authors": [
		  "Baldwin, Dean",
		  "Quinn, Patrick J."
		],
		"isbn13": "9780618318810",
		"msrp": "59.95",
		"edition": "1",
		"binding": "Paperback",
		"isbn": "061831881X",
		"language": "en",
		"dimensions": "Height: 9.25 Inches, Length: 5.75 Inches, Weight: 2.6675933702 Pounds, Width: 0.5 Inches",
		"pages": 944
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
	  },
	  {
		"title": "Longman Anthology of Detective Fiction, The",
		"image": "https://images.isbndb.com/covers/50/12/9780321195012.jpg",
		"title_long": "Longman Anthology of Detective Fiction, The",
		"date_published": "2004",
		"publisher": "Pearson",
		"synopsys": "<p><P>A detective fiction anthology filled with award winning short stories, information on the authors who wrote them, discussion about the history and evolution of the genre, and important literary criticism.</p>",
		"synopsis": "<p><P>A detective fiction anthology filled with award winning short stories, information on the authors who wrote them, discussion about the history and evolution of the genre, and important literary criticism.</p>",
		"overview": "<p>A detective fiction anthology filled with award winning short stories, information on the authors who wrote them, discussion about the history and evolution of the genre, and important literary criticism.</p>",
		"authors": [
		  "Mansfield-Kelley, Deane",
		  "Marchino, Lois"
		],
		"isbn13": "9780321195012",
		"msrp": "33.32",
		"edition": "1",
		"binding": "Paperback",
		"isbn": "0321195019",
		"language": "en",
		"dimensions": "Height: 8.95 Inches, Length: 6 Inches, Weight: 0.220462262 Pounds, Width: 1.2 Inches",
		"pages": 496
	  },
	  {
		"title": "Literature: An Introduction to Fiction, Poetry, Drama, and Writing, MLA Update Edition (13th Edition)",
		"image": "https://images.isbndb.com/covers/64/65/9780134586465.jpg",
		"title_long": "Literature: An Introduction to Fiction, Poetry, Drama, and Writing, MLA Update Edition (13th Edition)",
		"date_published": "2019",
		"publisher": "Pearson",
		"authors": [
		  "Kennedy, X. J.",
		  "Gioia, Dana"
		],
		"isbn13": "9780134586465",
		"msrp": "146.65",
		"edition": "13",
		"binding": "Hardcover",
		"isbn": "0134586468",
		"language": "en",
		"dimensions": "Height: 9.2 Inches, Length: 1.9 Inches, Weight: 3.58030713488 Pounds, Width: 6.6 Inches",
		"pages": 2064
	  },
	  {
		"title": "Fiction 100 an Anthology of Short Fiction: Short Story Fiction",
		"image": "https://images.isbndb.com/covers/37/66/9780132243766.jpg",
		"title_long": "Fiction 100 an Anthology of Short Fiction: Short Story Fiction",
		"date_published": "1980",
		"publisher": "Addison Wesley Publishing Company",
		"authors": [
		  "James H. Pickering,James H Pickering"
		],
		"isbn13": "9780132243766",
		"msrp": "80.00",
		"edition": "0011-",
		"binding": "Paperback",
		"isbn": "0132243768",
		"language": "en",
		"dimensions": "Height: 8.89762 Inches, Length: 6.10235 Inches, Weight: 2.8 Pounds, Width: 1.73228 Inches"
	  },
	  {
		"title": "Literature: An Introduction to Fiction, Poetry, Drama, and Writing (11th Edition)",
		"image": "https://images.isbndb.com/covers/88/13/9780205698813.jpg",
		"title_long": "Literature: An Introduction to Fiction, Poetry, Drama, and Writing (11th Edition)",
		"date_published": "2009",
		"publisher": "Pearson",
		"synopsys": "<p><P>The material is presented in a newly revised, easier to study format and inlcudes MLA&rsquo;s latest guidelines. Conversations between Dana Gioia and celebrated fiction writer Amy Tan, current U. S. Poet Laureate Kay Ryan, and contemporary playwright David Ives, offer students an insider&rsquo;s look into the importance of reading to three contemporary writers. A Latin American Writers casebook is new to Fiction and collects some of the finest authors from the region including Octavia Paz, Gabriel Garcia Marquez, and Ines Arendondo. A casebook on Nathaniel Hawthorne&rsquo;s &ldquo;Young Goodman Brown&rdquo; is now featured as part of the Three Stories In-depth chapter. Many new writers have been added including Naguib Mahfouz, Virginia Woolf, Sherman Alexie, Mary Oliver, Bettie Sellers, and Anne Deavere Smith. As always, editors X. J. Kennedy and Dana Gioia bring personal warmth and a human perspective to the Eleventh Edition of this comprehensive anthology.</p>",
		"synopsis": "<p><P>The material is presented in a newly revised, easier to study format and inlcudes MLA&rsquo;s latest guidelines. Conversations between Dana Gioia and celebrated fiction writer Amy Tan, current U. S. Poet Laureate Kay Ryan, and contemporary playwright David Ives, offer students an insider&rsquo;s look into the importance of reading to three contemporary writers. A Latin American Writers casebook is new to Fiction and collects some of the finest authors from the region including Octavia Paz, Gabriel Garcia Marquez, and Ines Arendondo. A casebook on Nathaniel Hawthorne&rsquo;s &ldquo;Young Goodman Brown&rdquo; is now featured as part of the Three Stories In-depth chapter. Many new writers have been added including Naguib Mahfouz, Virginia Woolf, Sherman Alexie, Mary Oliver, Bettie Sellers, and Anne Deavere Smith. As always, editors X. J. Kennedy and Dana Gioia bring personal warmth and a human perspective to the Eleventh Edition of this comprehensive anthology.</p>",
		"overview": "<p>The material is presented in a newly revised, easier to study format and inlcudes MLA’s latest guidelines. Conversations between Dana Gioia and celebrated fiction writer Amy Tan, current U. S. Poet Laureate Kay Ryan, and contemporary playwright David Ives, offer students an insider’s look into the importance of reading to three contemporary writers. A Latin American Writers casebook is new to Fiction and collects some of the finest authors from the region including Octavia Paz, Gabriel Garcia Marquez, and Ines Arendondo. A casebook on Nathaniel Hawthorne’s “Young Goodman Brown” is now featured as part of the Three Stories In-depth chapter. Many new writers have been added including Naguib Mahfouz, Virginia Woolf, Sherman Alexie, Mary Oliver, Bettie Sellers, and Anne Deavere Smith. As always, editors X. J. Kennedy and Dana Gioia bring personal warmth and a human perspective to the <i>Eleventh Edition</i> of this comprehensive anthology.</p>",
		"subjects": [
		  "Literature",
		  "Collections",
		  "Literature, collections"
		],
		"authors": [
		  "Kennedy, X. J.",
		  "Gioia, Dana"
		],
		"isbn13": "9780205698813",
		"msrp": "112.8",
		"edition": "11",
		"binding": "Hardcover",
		"isbn": "0205698816",
		"language": "en",
		"dimensions": "Height: 9.5 Inches, Length: 6.7 Inches, Weight: 3.8 Pounds, Width: 2 Inches",
		"pages": 2256
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
