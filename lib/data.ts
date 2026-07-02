import type { Chapter, DeepCaseItem, DeepConcept, DeepQuote, DeepTrainingScenario, LearningPath } from './types';

export const chapters: Chapter[] = [
  {
    "id": "shi-ji",
    "order": 1,
    "title": "始计篇",
    "slug": "shi-ji",
    "theme": "胜算判断",
    "summary": "行动之前，先计算能不能赢。",
    "modernMeaning": "始计篇对应现代能力：胜算判断。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "七计",
      "道天地将法",
      "庙算"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "说明战争与重大行动的风险",
      "提出五事：道天地将法",
      "提出七计比较法",
      "强调庙算与胜算"
    ],
    "fullOriginal": "兵者，国之大事，死生之地，存亡之道，不可不察也。\n\n故经之以五事，校之以计，而索其情：一曰道，二曰天，三曰地，四曰将，五曰法。道者，令民于上同意，可与之死，可与之生，而不危也；天者，阴阳、寒暑、时制也；地者，远近、险易、广狭、死生也；将者，智、信、仁、勇、严也；法者，曲制、官道、主用也。凡此五者，将莫不闻，知之者胜，不知之者不胜。故校之以计，而索其情，曰：主孰有道？将孰有能？天地孰得？法令孰行？兵众孰强？士卒孰练？赏罚孰明？吾以此知胜负矣。将听吾计，用之必胜，留之；将不听吾计，用之必败，去之。\n\n计利以听，乃为之势，以佐其外。势者，因利而制权也。兵者，诡道也。故能而示之不能，用而示之不用，近而示之远，远而示之近。利而诱之，乱而取之，实而备之，强而避之，怒而挠之，卑而骄之，佚而劳之，亲而离之，攻其无备，出其不意。此兵家之胜，不可先传也。\n\n夫未战而庙算胜者，得算多也；未战而庙算不胜者，得算少也。多算胜少算，而况于无算乎！吾以此观之，胜负见矣。",
    "sentences": [
      {
        "id": "shi-ji-1",
        "chapterId": "shi-ji",
        "order": 1,
        "original": "兵者，国之大事，死生之地，存亡之道，不可不察也。",
        "words": [
          {
            "word": "不可不察",
            "explanation": "不能不慎重考察，强调重大行动前必须先判断利害。",
            "modernMapping": "决策审查"
          },
          {
            "word": "国之大事",
            "explanation": "国家层面的重大事务，不是局部冲动或个人好恶。",
            "modernMapping": "重大项目"
          },
          {
            "word": "死生之地",
            "explanation": "关系生存与失败代价的处境。",
            "modernMapping": "风险边界"
          },
          {
            "word": "存亡之道",
            "explanation": "决定组织能否延续的关键路径。",
            "modernMapping": "长期存续"
          }
        ],
        "translation": "军事行动是国家大事，关系生死存亡，不能不慎重考察。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t02",
          "t09"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-2",
        "chapterId": "shi-ji",
        "order": 2,
        "original": "故经之以五事，校之以计，而索其情：一曰道，二曰天，三曰地，四曰将，五曰法。",
        "words": [
          {
            "word": "五事",
            "explanation": "道、天、地、将、法五个基本判断维度。",
            "modernMapping": "胜算框架"
          },
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "所以要用五个方面作为基本准则，再用具体比较来探求真实情况：道、天、地、将、法。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "zhi-tian-zhi-di",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t03",
          "t10"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-3",
        "chapterId": "shi-ji",
        "order": 3,
        "original": "道者，令民于上同意，可与之死，可与之生，而不危也；天者，阴阳、寒暑、时制也；地者，远近、险易、广狭、死生也；将者，智、信、仁、勇、严也；法者，曲制、官道、主用也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "换成今天的话：共同目标，令民众于上同意，可与之死，可与之生，而不危；时机，阴阳、寒暑、时制；地利，远近、险易、广狭、死生；将领，智、信、仁、勇、严；制度，曲制、官共同目标、君主用。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-4",
        "chapterId": "shi-ji",
        "order": 4,
        "original": "凡此五者，将莫不闻，知之者胜，不知之者不胜。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "凡此五者",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "将莫不闻",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "这句在说：凡是此五，将领没有谁不闻，知之取胜，不知之不取胜。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-5",
        "chapterId": "shi-ji",
        "order": 5,
        "original": "故校之以计，而索其情，曰：主孰有道？",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "故校之以",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "而索其情",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "意思是：所以校之以计算和比较，而索其情，曰：君主哪一方有共同目标？",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-6",
        "chapterId": "shi-ji",
        "order": 6,
        "original": "将孰有能？",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将孰有能",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "可以理解为：将领哪一方有能？",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-7",
        "chapterId": "shi-ji",
        "order": 7,
        "original": "天地孰得？",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "白话说就是：时机地利哪一方得？",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-8",
        "chapterId": "shi-ji",
        "order": 8,
        "original": "法令孰行？",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "法令孰行",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "换成今天的话：制度令哪一方行？",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-9",
        "chapterId": "shi-ji",
        "order": 9,
        "original": "兵众孰强？",
        "words": [
          {
            "word": "兵众孰强",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "这句在说：兵兵众哪一方强？",
        "modernApplication": "用于胜算判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-10",
        "chapterId": "shi-ji",
        "order": 10,
        "original": "士卒孰练？",
        "words": [
          {
            "word": "士卒孰练",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "意思是：士士卒哪一方练？",
        "modernApplication": "用于胜算判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-11",
        "chapterId": "shi-ji",
        "order": 11,
        "original": "赏罚孰明？",
        "words": [
          {
            "word": "赏罚孰明",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "可以理解为：赏罚哪一方明？",
        "modernApplication": "用于胜算判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-12",
        "chapterId": "shi-ji",
        "order": 12,
        "original": "吾以此知胜负矣。",
        "words": [
          {
            "word": "知胜",
            "explanation": "知道胜利成立的条件。",
            "modernMapping": "可行性判断"
          },
          {
            "word": "吾以此知",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "胜负矣",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "白话说就是：我方以此知取胜负了。",
        "modernApplication": "用于胜算判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-13",
        "chapterId": "shi-ji",
        "order": 13,
        "original": "将听吾计，用之必胜，留之；将不听吾计，用之必败，去之。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将听吾计",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "用之必胜",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "换成今天的话：将领听我方计算和比较，用之必取胜，留之；将领不听我方计算和比较，用之必失败，去之。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-14",
        "chapterId": "shi-ji",
        "order": 14,
        "original": "计利以听，乃为之势，以佐其外。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "计利以听",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "乃为之势",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "这句在说：计算和比较利益以听，乃为之势能，以佐其外。",
        "modernApplication": "做产品、投资或组织变革前，先列出可验证的有利条件和不利条件，用证据数量决定是否推进。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "shi-neng",
          "li-hai-bing-guan"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-15",
        "chapterId": "shi-ji",
        "order": 15,
        "original": "势者，因利而制权也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "势者",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "因利而制",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "意思是：势能，因利益而制权。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "li-hai-bing-guan",
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-16",
        "chapterId": "shi-ji",
        "order": 16,
        "original": "兵者，诡道也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "兵者",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "诡道也",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "可以理解为：军队事行动，诡共同目标。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-17",
        "chapterId": "shi-ji",
        "order": 17,
        "original": "故能而示之不能，用而示之不用，近而示之远，远而示之近。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "故能而示",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "之不能",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "白话说就是：所以能而示之不能，用而示之不用，近而示之远，远而示之近。",
        "modernApplication": "竞争中不要把真实路线、发布时间和资源重点过早暴露，可用试点、节奏控制和信息差保护主动权。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-18",
        "chapterId": "shi-ji",
        "order": 18,
        "original": "利而诱之，乱而取之，实而备之，强而避之，怒而挠之，卑而骄之，佚而劳之，亲而离之，攻其无备，出其不意。",
        "words": [
          {
            "word": "利而诱之",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "乱而取之",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "实而备之",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "换成今天的话：利益而诱之，乱而取之，坚实处而备之，强而避之，怒而挠之，卑而骄之，佚而劳之，亲而离之，进攻其无备，出其不意。",
        "modernApplication": "竞争中不要把真实路线、发布时间和资源重点过早暴露，可用试点、节奏控制和信息差保护主动权。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu",
          "li-hai-bing-guan",
          "dao-tian-di-jiang-fa"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-19",
        "chapterId": "shi-ji",
        "order": 19,
        "original": "此兵家之胜，不可先传也。",
        "words": [
          {
            "word": "此兵家之",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "不可先传",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "这句在说：此兵家之取胜，不可先传。",
        "modernApplication": "用于胜算判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-20",
        "chapterId": "shi-ji",
        "order": 20,
        "original": "夫未战而庙算胜者，得算多也；未战而庙算不胜者，得算少也。",
        "words": [
          {
            "word": "庙算",
            "explanation": "行动前在决策中枢进行的系统筹划。",
            "modernMapping": "预案评估"
          },
          {
            "word": "得算",
            "explanation": "有利条件与可验证依据的数量。",
            "modernMapping": "胜算证据"
          }
        ],
        "translation": "还没有开战就在庙堂筹划中显示能胜，是因为有利条件多；筹划中显示不能胜，是因为有利条件少。",
        "modernApplication": "做产品、投资或组织变革前，先列出可验证的有利条件和不利条件，用证据数量决定是否推进。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-21",
        "chapterId": "shi-ji",
        "order": 21,
        "original": "多算胜少算，而况于无算乎！",
        "words": [
          {
            "word": "多算胜少",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "而况于无",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "算乎",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "可以理解为：多算取胜少算，而况于无算乎！",
        "modernApplication": "用于胜算判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-22",
        "chapterId": "shi-ji",
        "order": 22,
        "original": "吾以此观之，胜负见矣。",
        "words": [
          {
            "word": "吾以此观",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "胜负见矣",
            "explanation": "本句实际出现的关键表达，需要放回“胜算判断”语境中理解。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "白话说就是：我方以此观之，取胜负见了。",
        "modernApplication": "用于胜算判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "qi-ji"
        ],
        "relatedCaseIds": [
          "guan-du",
          "startup-giant"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "important"
      }
    ],
    "coreSummary": "始计篇的核心不是记住名句，而是形成“胜算判断”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于胜算判断的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "qi-ji"
    ],
    "relatedCaseIds": [
      "guan-du",
      "startup-giant"
    ],
    "relatedQuoteIds": [
      "q01"
    ]
  },
  {
    "id": "zuo-zhan",
    "order": 2,
    "title": "作战篇",
    "slug": "zuo-zhan",
    "theme": "成本控制",
    "summary": "久战会消耗资源，胜利也要计算代价。",
    "modernMeaning": "作战篇对应现代能力：成本控制。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "兵贵胜不贵久"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "列出战争成本",
      "说明久战伤害",
      "强调拙速胜过巧久",
      "总结兵贵胜不贵久"
    ],
    "fullOriginal": "凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮。则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。\n\n其用战也，胜久则钝兵挫锐，攻城则力屈，久暴师则国用不足。夫钝兵挫锐，屈力殚货，则诸侯乘其弊而起，虽有智者不能善其后矣。故兵闻拙速，未睹巧之久也。夫兵久而国利者，未之有也。故不尽知用兵之害者，则不能尽知用兵之利也。\n\n善用兵者，役不再籍，粮不三载，取用于国，因粮于敌，故军食可足也。国之贫于师者远输，远输则百姓贫；近师者贵卖，贵卖则百姓财竭，财竭则急于丘役。力屈中原、内虚于家，百姓之费，十去其七；公家之费，破军罢马，甲胄矢弓，戟盾矛橹，丘牛大车，十去其六。故智将务食于敌，食敌一钟，当吾二十钟；萁杆一石，当吾二十石。故杀敌者，怒也；取敌之利者，货也。车战得车十乘以上，赏其先得者而更其旌旗。车杂而乘之，卒善而养之，是谓胜敌而益强。\n\n故兵贵胜，不贵久。\n\n故知兵之将，民之司命。国家安危之主也。",
    "sentences": [
      {
        "id": "zuo-zhan-1",
        "chapterId": "zuo-zhan",
        "order": 1,
        "original": "凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "凡用兵之",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "驰车千驷",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "白话说就是：凡是用兵的基本方制度，驰车千驷，革车千乘，带甲十万，千里馈粮粮食。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-2",
        "chapterId": "zuo-zhan",
        "order": 2,
        "original": "则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。",
        "words": [
          {
            "word": "则内外之",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "宾客之用",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "胶漆之材",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "换成今天的话：则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之军队举了。",
        "modernApplication": "用于成本控制时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-3",
        "chapterId": "zuo-zhan",
        "order": 3,
        "original": "其用战也，胜久则钝兵挫锐，攻城则力屈，久暴师则国用不足。",
        "words": [
          {
            "word": "钝兵挫锐",
            "explanation": "军队疲惫、锐气受损。",
            "modernMapping": "团队消耗"
          },
          {
            "word": "国用不足",
            "explanation": "国家资源被长期行动耗空。",
            "modernMapping": "资源枯竭"
          },
          {
            "word": "攻城",
            "explanation": "代价最高、不得已的硬攻方式。",
            "modernMapping": "高成本方案"
          }
        ],
        "translation": "这句在说：其用作战，取胜久则钝兵挫锐，进攻城则力屈，久暴军队则国家用不足。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-4",
        "chapterId": "zuo-zhan",
        "order": 4,
        "original": "夫钝兵挫锐，屈力殚货，则诸侯乘其弊而起，虽有智者不能善其后矣。",
        "words": [
          {
            "word": "钝兵挫锐",
            "explanation": "军队疲惫、锐气受损。",
            "modernMapping": "团队消耗"
          },
          {
            "word": "夫钝兵挫",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "屈力殚货",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "意思是：大凡是钝兵挫锐，屈力殚货，则诸侯乘其弊而起，虽有智不能善其后了。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-5",
        "chapterId": "zuo-zhan",
        "order": 5,
        "original": "故兵闻拙速，未睹巧之久也。",
        "words": [
          {
            "word": "故兵闻拙",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "未睹巧之",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "久也",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "可以理解为：所以兵闻拙速，未睹巧之久。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-6",
        "chapterId": "zuo-zhan",
        "order": 6,
        "original": "夫兵久而国利者，未之有也。",
        "words": [
          {
            "word": "夫兵久而",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "国利者",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "未之有也",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "白话说就是：大凡是兵久而国家利益，未之有。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "li-hai-bing-guan",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-7",
        "chapterId": "zuo-zhan",
        "order": 7,
        "original": "故不尽知用兵之害者，则不能尽知用兵之利也。",
        "words": [
          {
            "word": "故不尽知",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "用兵之害",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "则不能尽",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "换成今天的话：所以不尽知用兵之风险，则不能尽知用兵之利益。",
        "modernApplication": "用于成本控制时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-8",
        "chapterId": "zuo-zhan",
        "order": 8,
        "original": "善用兵者，役不再籍，粮不三载，取用于国，因粮于敌，故军食可足也。",
        "words": [
          {
            "word": "因粮于敌",
            "explanation": "利用外部或对方资源补给自己。",
            "modernMapping": "资源转化"
          },
          {
            "word": "善用兵者",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "役不再籍",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "这句在说：善用军队事行动，役不再籍，粮粮食不三载，取用于国家，因粮粮食于对手，所以军队粮食可足。",
        "modernApplication": "商业扩张可优先寻找能利用现有渠道、伙伴资源或客户网络的路径，让每次胜利反过来补强能力。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-9",
        "chapterId": "zuo-zhan",
        "order": 9,
        "original": "国之贫于师者远输，远输则百姓贫；近师者贵卖，贵卖则百姓财竭，财竭则急于丘役。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "国之贫于",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "师者远输",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "意思是：国家之贫于军队远输，远输则百姓贫；近军队贵卖，贵卖则百姓财竭，财竭则急于丘役。",
        "modernApplication": "用于成本控制时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-10",
        "chapterId": "zuo-zhan",
        "order": 10,
        "original": "力屈中原、内虚于家，百姓之费，十去其七；公家之费，破军罢马，甲胄矢弓，戟盾矛橹，丘牛大车，十去其六。",
        "words": [
          {
            "word": "力屈中原",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "内虚于家",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "百姓之费",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "可以理解为：力屈中原、内薄弱处于家，百姓之费，十去其七；公家之费，破军队罢马，甲胄矢弓，戟盾矛橹，丘牛大车，十去其六。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "bi-shi-ji-xu",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-11",
        "chapterId": "zuo-zhan",
        "order": 11,
        "original": "故智将务食于敌，食敌一钟，当吾二十钟；萁杆一石，当吾二十石。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故智将务",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "食于敌",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "白话说就是：所以智将领务粮食于对手，粮食对手一钟，当我方二十钟；萁杆一石，当我方二十石。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-12",
        "chapterId": "zuo-zhan",
        "order": 12,
        "original": "故杀敌者，怒也；取敌之利者，货也。",
        "words": [
          {
            "word": "故杀敌者",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "怒也",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "取敌之利",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "换成今天的话：所以杀对手，怒；取对手之利益，货。",
        "modernApplication": "商业扩张可优先寻找能利用现有渠道、伙伴资源或客户网络的路径，让每次胜利反过来补强能力。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-13",
        "chapterId": "zuo-zhan",
        "order": 13,
        "original": "车战得车十乘以上，赏其先得者而更其旌旗。",
        "words": [
          {
            "word": "旌旗",
            "explanation": "古代传递军令的视觉信号。",
            "modernMapping": "协同标识"
          },
          {
            "word": "车战得车",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "十乘以上",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "这句在说：车作战得车十乘以上，赏其先得而更其旌旗。",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "relatedConceptIds": [
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-14",
        "chapterId": "zuo-zhan",
        "order": 14,
        "original": "车杂而乘之，卒善而养之，是谓胜敌而益强。",
        "words": [
          {
            "word": "胜敌而益强",
            "explanation": "取胜后还能增强自身能力。",
            "modernMapping": "正向积累"
          },
          {
            "word": "车杂而乘",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "卒善而养",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "意思是：车杂而乘之，士卒善而养之，是谓取胜对手而益强。",
        "modernApplication": "商业扩张可优先寻找能利用现有渠道、伙伴资源或客户网络的路径，让每次胜利反过来补强能力。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-15",
        "chapterId": "zuo-zhan",
        "order": 15,
        "original": "故兵贵胜，不贵久。",
        "words": [
          {
            "word": "兵贵胜",
            "explanation": "用兵重在取得有效胜利。",
            "modernMapping": "结果导向"
          },
          {
            "word": "不贵久",
            "explanation": "不应追求长期消耗和拖延。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "所以用兵重在迅速取得有效胜利，而不是陷入长期拖耗。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "zuo-zhan-16",
        "chapterId": "zuo-zhan",
        "order": 16,
        "original": "故知兵之将，民之司命。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故知兵之",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "民之司命",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "白话说就是：所以知兵之将领，民众之司命。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-17",
        "chapterId": "zuo-zhan",
        "order": 17,
        "original": "国家安危之主也。",
        "words": [
          {
            "word": "国家安危",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          },
          {
            "word": "之主也",
            "explanation": "本句实际出现的关键表达，需要放回“成本控制”语境中理解。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "换成今天的话：国家家安危之君主。",
        "modernApplication": "用于成本控制时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "qi-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "chi-bi",
          "price-war"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      }
    ],
    "coreSummary": "作战篇的核心不是记住名句，而是形成“成本控制”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于成本控制的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "qi-ji",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "chi-bi",
      "price-war"
    ],
    "relatedQuoteIds": [
      "q02"
    ]
  },
  {
    "id": "mou-gong",
    "order": 3,
    "title": "谋攻篇",
    "slug": "mou-gong",
    "theme": "不战而胜",
    "summary": "最高级的竞争是破坏对方战略，而不是硬拼。",
    "modernMeaning": "谋攻篇对应现代能力：不战而胜。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "上兵伐谋",
      "知己知彼",
      "不战而屈人之兵"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "比较全胜与破胜",
      "提出不战而屈人之兵",
      "提出伐谋伐交伐兵攻城层级",
      "强调知己知彼"
    ],
    "fullOriginal": "夫用兵之法，全国为上，破国次之；全军为上，破军次之；全旅为上，破旅次之；全卒为上，破卒次之；全伍为上，破伍次之。\n\n是故百战百胜，非善之善也；不战而屈人之兵，善之善者也。故上兵伐谋，其次伐交，其次伐兵，其下攻城。攻城之法，为不得已。修橹轒辒，具器械，三月而后成；距堙，又三月而后已。将不胜其忿而蚁附之，杀士卒三分之一，而城不拔者，此攻之灾也。故善用兵者，屈人之兵而非战也，拔人之城而非攻也，毁人之国而非久也，必以全争于天下，故兵不顿而利可全，此谋攻之法也。\n\n故用兵之法，十则围之，五则攻之，倍则分之，敌则能战之，少则能逃之，不若则能避之。故小敌之坚，大敌之擒也。\n\n夫将者，国之辅也。辅周则国必强，辅隙则国必弱。故君之所以患于军者三：不知军之不可以进而谓之进，不知军之不可以退而谓之退，是谓縻军；不知三军之事而同三军之政，则军士惑矣；不知三军之权而同三军之任，则军士疑矣。三军既惑且疑，则诸侯之难至矣。是谓乱军引胜。\n\n故知胜有五：知可以战与不可以战者胜，识众寡之用者胜，上下同欲者胜，以虞待不虞者胜，将能而君不御者胜。此五者，知胜之道也。故曰：知己知彼，百战不贻；不知彼而知己，一胜一负；不知彼不知己，每战必败。",
    "sentences": [
      {
        "id": "mou-gong-1",
        "chapterId": "mou-gong",
        "order": 1,
        "original": "夫用兵之法，全国为上，破国次之；全军为上，破军次之；全旅为上，破旅次之；全卒为上，破卒次之；全伍为上，破伍次之。",
        "words": [
          {
            "word": "全国为上",
            "explanation": "保全整体胜过破坏式胜利。",
            "modernMapping": "保全价值"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "换成今天的话：大凡是用兵的基本方制度，全国家为上，破国家次之；全军队为上，破军队次之；全旅为上，破旅次之；全士卒为上，破士卒次之；全伍为上，破伍次之。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-2",
        "chapterId": "mou-gong",
        "order": 2,
        "original": "是故百战百胜，非善之善也；不战而屈人之兵，善之善者也。",
        "words": [
          {
            "word": "不战而屈人之兵",
            "explanation": "不靠正面交战就让对手屈服。",
            "modernMapping": "非对称竞争"
          },
          {
            "word": "是故百战",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "百胜",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "所以百战百胜并不是最高明；不通过交战就让对手屈服，才是最高明。",
        "modernApplication": "谈判和竞争中优先改变对方预期、伙伴关系和成本结构，正面硬拼应作为最后选项。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "mou-gong-3",
        "chapterId": "mou-gong",
        "order": 3,
        "original": "故上兵伐谋，其次伐交，其次伐兵，其下攻城。",
        "words": [
          {
            "word": "上兵伐谋",
            "explanation": "最高明的用兵是破坏对方谋划。",
            "modernMapping": "战略拆解"
          },
          {
            "word": "伐交",
            "explanation": "瓦解或重组对方外部关系。",
            "modernMapping": "联盟竞争"
          },
          {
            "word": "攻城",
            "explanation": "代价最高、不得已的硬攻方式。",
            "modernMapping": "高成本方案"
          }
        ],
        "translation": "最高明的用兵是破坏对方谋划，其次是瓦解外交联盟，再次是打击军队，最差才是攻城。",
        "modernApplication": "谈判和竞争中优先改变对方预期、伙伴关系和成本结构，正面硬拼应作为最后选项。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-ke-sheng-zai-ji",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "mou-gong-4",
        "chapterId": "mou-gong",
        "order": 4,
        "original": "攻城之法，为不得已。",
        "words": [
          {
            "word": "攻城",
            "explanation": "代价最高、不得已的硬攻方式。",
            "modernMapping": "高成本方案"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "可以理解为：进攻城之制度，为不得已。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shang-bing-fa-mou",
          "bu-ke-sheng-zai-ji",
          "miao-suan"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "mou-gong-5",
        "chapterId": "mou-gong",
        "order": 5,
        "original": "修橹轒辒，具器械，三月而后成；距堙，又三月而后已。",
        "words": [
          {
            "word": "修橹轒辒",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "具器械",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "三月而后",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "白话说就是：修橹轒辒，具器械，三月而后成；距堙，又三月而后已。",
        "modernApplication": "用于不战而胜时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "mou-gong-6",
        "chapterId": "mou-gong",
        "order": 6,
        "original": "将不胜其忿而蚁附之，杀士卒三分之一，而城不拔者，此攻之灾也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将不胜其",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "忿而蚁附",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "换成今天的话：将领不取胜其忿而蚁附之，杀士士卒三分之一，而城不拔，此进攻之灾。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-7",
        "chapterId": "mou-gong",
        "order": 7,
        "original": "故善用兵者，屈人之兵而非战也，拔人之城而非攻也，毁人之国而非久也，必以全争于天下，故兵不顿而利可全，此谋攻之法也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "这句在说：所以善用军队事行动，屈人之兵而非作战，拔人之城而非进攻，毁人之国家而非久，必以全争于时机下，所以兵不顿而利益可全，此谋进攻之制度。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "bu-zhan-er-qu-ren",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-8",
        "chapterId": "mou-gong",
        "order": 8,
        "original": "故用兵之法，十则围之，五则攻之，倍则分之，敌则能战之，少则能逃之，不若则能避之。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "故用兵之",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "十则围之",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "意思是：所以用兵的基本方制度，十则围之，五则进攻之，倍则分之，对手则能作战之，少则能逃之，不若则能避之。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-9",
        "chapterId": "mou-gong",
        "order": 9,
        "original": "故小敌之坚，大敌之擒也。",
        "words": [
          {
            "word": "故小敌之",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "大敌之擒",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "可以理解为：所以小对手之坚，大对手之擒。",
        "modernApplication": "用于不战而胜时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "mou-gong-10",
        "chapterId": "mou-gong",
        "order": 10,
        "original": "夫将者，国之辅也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "夫将者",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "国之辅也",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "白话说就是：大凡是将领，国家之辅。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "mou-gong-11",
        "chapterId": "mou-gong",
        "order": 11,
        "original": "辅周则国必强，辅隙则国必弱。",
        "words": [
          {
            "word": "辅周则国",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "必强",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "辅隙则国",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "换成今天的话：辅周则国家必强，辅隙则国家必弱。",
        "modernApplication": "用于不战而胜时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "mou-gong-12",
        "chapterId": "mou-gong",
        "order": 12,
        "original": "故君之所以患于军者三：不知军之不可以进而谓之进，不知军之不可以退而谓之退，是谓縻军；不知三军之事而同三军之政，则军士惑矣；不知三军之权而同三军之任，则军士疑矣。",
        "words": [
          {
            "word": "故君之所",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "以患于军",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "者三",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "这句在说：所以君之所以患于军队三：不知军队之不可以进而谓之进，不知军队之不可以退而谓之退，是谓縻军队；不知三军队之事而同三军队之政，则军队士惑了；不知三军队之权而同三军队之任，则军队士疑了。",
        "modernApplication": "用于不战而胜时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-13",
        "chapterId": "mou-gong",
        "order": 13,
        "original": "三军既惑且疑，则诸侯之难至矣。",
        "words": [
          {
            "word": "三军既惑",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "且疑",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "则诸侯之",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "意思是：三军队既惑且疑，则诸侯之难至了。",
        "modernApplication": "用于不战而胜时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "mou-gong-14",
        "chapterId": "mou-gong",
        "order": 14,
        "original": "是谓乱军引胜。",
        "words": [
          {
            "word": "是谓乱军",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "引胜",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "可以理解为：是谓乱军队引取胜。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-15",
        "chapterId": "mou-gong",
        "order": 15,
        "original": "故知胜有五：知可以战与不可以战者胜，识众寡之用者胜，上下同欲者胜，以虞待不虞者胜，将能而君不御者胜。",
        "words": [
          {
            "word": "知胜",
            "explanation": "知道胜利成立的条件。",
            "modernMapping": "可行性判断"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "白话说就是：所以知取胜有五：知可以作战与不可以作战取胜，识兵众寡之用取胜，上下同欲取胜，以虞待不虞取胜，将领能而君不御取胜。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-16",
        "chapterId": "mou-gong",
        "order": 16,
        "original": "此五者，知胜之道也。",
        "words": [
          {
            "word": "知胜",
            "explanation": "知道胜利成立的条件。",
            "modernMapping": "可行性判断"
          },
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          }
        ],
        "translation": "换成今天的话：此五，知取胜之共同目标。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-17",
        "chapterId": "mou-gong",
        "order": 17,
        "original": "故曰：知己知彼，百战不贻；不知彼而知己，一胜一负；不知彼不知己，每战必败。",
        "words": [
          {
            "word": "知己知彼",
            "explanation": "同时理解自己与对手。",
            "modernMapping": "双向认知"
          },
          {
            "word": "故曰",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "百战不贻",
            "explanation": "本句实际出现的关键表达，需要放回“不战而胜”语境中理解。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "所以说：了解自己又了解对方，百战也不危险；只了解自己不了解对方，胜负各半；双方都不了解，每战都会失败。",
        "modernApplication": "进入新市场、重构系统或谈判前，同时写清自身能力边界和对方约束，避免只看机会不看对手。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-ji-zhi-bi",
          "miao-suan",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "fei-shui",
          "niche-product"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "classic"
      }
    ],
    "coreSummary": "谋攻篇的核心不是记住名句，而是形成“不战而胜”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于不战而胜的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "miao-suan",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "fei-shui",
      "niche-product"
    ],
    "relatedQuoteIds": [
      "q03"
    ]
  },
  {
    "id": "jun-xing",
    "order": 4,
    "title": "军形篇",
    "slug": "jun-xing",
    "theme": "先胜后战",
    "summary": "先让自己不可败，再等待机会。",
    "modernMeaning": "军形篇对应现代能力：先胜后战。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "先胜后战",
      "不可胜在己"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "先建立不败条件",
      "区分己方可控与敌方漏洞",
      "强调胜兵先胜后战",
      "以制度保障胜利"
    ],
    "fullOriginal": "昔之善战者，先为不可胜，以待敌之可胜。不可胜在己，可胜在敌。故善战者，能为不可胜，不能使敌之必可胜。故曰：胜可知，而不可为。不可胜者，守也；可胜者，攻也。守则不足，攻则有余。善守者藏于九地之下，善攻者动于九天之上，故能自保而全胜也。见胜不过众人之所知，非善之善者也；战胜而天下曰善，非善之善者也。故举秋毫不为多力，见日月不为明目，闻雷霆不为聪耳。古之所谓善战者，胜于易胜者也。故善战者之胜也，无智名，无勇功，故其战胜不忒。不忒者，其所措胜，胜已败者也。故善战者，立于不败之地，而不失敌之败也。是故胜兵先胜而后求战，败兵先战而后求胜。善用兵者，修道而保法，故能为胜败之政。\n\n兵法：一曰度，二曰量，三曰数，四曰称，五曰胜。地生度，度生量，量生数，数生称，称生胜。故胜兵若以镒称铢，败兵若以铢称镒。\n\n称胜者之战民也，若决积水于千仞之溪者，形也。",
    "sentences": [
      {
        "id": "jun-xing-1",
        "chapterId": "jun-xing",
        "order": 1,
        "original": "昔之善战者，先为不可胜，以待敌之可胜。",
        "words": [
          {
            "word": "不可胜",
            "explanation": "自己先做到不容易被击败。",
            "modernMapping": "防守底线"
          },
          {
            "word": "可胜",
            "explanation": "对方露出可利用的破绽。",
            "modernMapping": "机会窗口"
          }
        ],
        "translation": "这句在说：昔之善作战，先为不可取胜，以待对手之可取胜。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-2",
        "chapterId": "jun-xing",
        "order": 2,
        "original": "不可胜在己，可胜在敌。",
        "words": [
          {
            "word": "不可胜",
            "explanation": "自己先做到不容易被击败。",
            "modernMapping": "防守底线"
          },
          {
            "word": "可胜",
            "explanation": "对方露出可利用的破绽。",
            "modernMapping": "机会窗口"
          }
        ],
        "translation": "意思是：不可取胜在己，可取胜在对手。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-3",
        "chapterId": "jun-xing",
        "order": 3,
        "original": "故善战者，能为不可胜，不能使敌之必可胜。",
        "words": [
          {
            "word": "不可胜",
            "explanation": "自己先做到不容易被击败。",
            "modernMapping": "防守底线"
          },
          {
            "word": "可胜",
            "explanation": "对方露出可利用的破绽。",
            "modernMapping": "机会窗口"
          }
        ],
        "translation": "可以理解为：所以善作战，能为不可取胜，不能使对手之必可取胜。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-4",
        "chapterId": "jun-xing",
        "order": 4,
        "original": "故曰：胜可知，而不可为。",
        "words": [
          {
            "word": "故曰",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "胜可知",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "而不可为",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "白话说就是：所以曰：取胜可知，而不可为。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-5",
        "chapterId": "jun-xing",
        "order": 5,
        "original": "不可胜者，守也；可胜者，攻也。",
        "words": [
          {
            "word": "不可胜",
            "explanation": "自己先做到不容易被击败。",
            "modernMapping": "防守底线"
          },
          {
            "word": "可胜",
            "explanation": "对方露出可利用的破绽。",
            "modernMapping": "机会窗口"
          }
        ],
        "translation": "换成今天的话：不可取胜，防守；可取胜，进攻。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-6",
        "chapterId": "jun-xing",
        "order": 6,
        "original": "守则不足，攻则有余。",
        "words": [
          {
            "word": "守则不足",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "攻则有余",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "这句在说：防守则不足，进攻则有余。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-xing-7",
        "chapterId": "jun-xing",
        "order": 7,
        "original": "善守者藏于九地之下，善攻者动于九天之上，故能自保而全胜也。",
        "words": [
          {
            "word": "九地",
            "explanation": "九种作战处境。",
            "modernMapping": "处境分类"
          },
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "意思是：善防守藏于九地利之下，善进攻动于九时机之上，所以能自保而全取胜。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "bu-ke-sheng-zai-ji",
          "zhi-tian-zhi-di"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-8",
        "chapterId": "jun-xing",
        "order": 8,
        "original": "见胜不过众人之所知，非善之善者也；战胜而天下曰善，非善之善者也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "见胜不过",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "众人之所",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "可以理解为：见取胜不过兵众人之所知，非善之善；作战取胜而时机下曰善，非善之善。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-9",
        "chapterId": "jun-xing",
        "order": 9,
        "original": "故举秋毫不为多力，见日月不为明目，闻雷霆不为聪耳。",
        "words": [
          {
            "word": "故举秋毫",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "不为多力",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "见日月不",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "白话说就是：所以举秋毫不为多力，见日月不为明目，闻雷霆不为聪耳。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-xing-10",
        "chapterId": "jun-xing",
        "order": 10,
        "original": "古之所谓善战者，胜于易胜者也。",
        "words": [
          {
            "word": "古之所谓",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "善战者",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "胜于易胜",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "换成今天的话：古之所谓善作战，取胜于易取胜。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-11",
        "chapterId": "jun-xing",
        "order": 11,
        "original": "故善战者之胜也，无智名，无勇功，故其战胜不忒。",
        "words": [
          {
            "word": "故善战者",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "之胜也",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "无智名",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "这句在说：所以善作战之取胜，无智名，无勇功，所以其作战取胜不忒。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-12",
        "chapterId": "jun-xing",
        "order": 12,
        "original": "不忒者，其所措胜，胜已败者也。",
        "words": [
          {
            "word": "不忒者",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "其所措胜",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "胜已败者",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "意思是：不忒，其所措取胜，取胜已失败。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-13",
        "chapterId": "jun-xing",
        "order": 13,
        "original": "故善战者，立于不败之地，而不失敌之败也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "故善战者",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "立于不败",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "可以理解为：所以善作战，立于不失败之地利，而不失对手之失败。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "zhi-tian-zhi-di",
          "bing-gui-sheng"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-14",
        "chapterId": "jun-xing",
        "order": 14,
        "original": "是故胜兵先胜而后求战，败兵先战而后求胜。",
        "words": [
          {
            "word": "是故胜兵",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "先胜而后",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "求战",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "胜利的一方先创造胜利条件再求战，失败的一方先开战再指望取胜。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "jun-xing-15",
        "chapterId": "jun-xing",
        "order": 15,
        "original": "善用兵者，修道而保法，故能为胜败之政。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "换成今天的话：善用军队事行动，修共同目标而保制度，所以能为取胜失败之政。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-16",
        "chapterId": "jun-xing",
        "order": 16,
        "original": "兵法：一曰度，二曰量，三曰数，四曰称，五曰胜。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "兵法",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "一曰度",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "这句在说：兵制度：一曰度，二曰量，三曰数，四曰称，五曰取胜。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-17",
        "chapterId": "jun-xing",
        "order": 17,
        "original": "地生度，度生量，量生数，数生称，称生胜。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "地生度",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "度生量",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "意思是：地利生度，度生量，量生数，数生称，称生取胜。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-18",
        "chapterId": "jun-xing",
        "order": 18,
        "original": "故胜兵若以镒称铢，败兵若以铢称镒。",
        "words": [
          {
            "word": "故胜兵若",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "以镒称铢",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "败兵若以",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "可以理解为：所以取胜兵若以镒称铢，失败兵若以铢称镒。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-xing-19",
        "chapterId": "jun-xing",
        "order": 19,
        "original": "称胜者之战民也，若决积水于千仞之溪者，形也。",
        "words": [
          {
            "word": "称胜者之",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "战民也",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "若决积水",
            "explanation": "本句实际出现的关键表达，需要放回“先胜后战”语境中理解。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "白话说就是：称取胜之作战民众，若决积水于千仞之溪，形势能。",
        "modernApplication": "用于先胜后战时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bing-gui-sheng",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chu-han",
          "network-effect"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "important"
      }
    ],
    "coreSummary": "军形篇的核心不是记住名句，而是形成“先胜后战”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于先胜后战的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "bing-gui-sheng",
      "shang-bing-fa-mou"
    ],
    "relatedCaseIds": [
      "chu-han",
      "network-effect"
    ],
    "relatedQuoteIds": [
      "q04"
    ]
  },
  {
    "id": "bing-shi",
    "order": 5,
    "title": "兵势篇",
    "slug": "bing-shi",
    "theme": "借势造势",
    "summary": "用结构和势能放大力量。",
    "modernMeaning": "兵势篇对应现代能力：借势造势。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "势能",
      "正合奇胜"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "用组织分工治理大规模行动",
      "以奇正形成变化",
      "强调势能不是蛮力",
      "通过结构制造顺势"
    ],
    "fullOriginal": "凡治众如治寡，分数是也；斗众如斗寡，形名是也；三军之众，可使必受敌而无败者，奇正是也；兵之所加，如以碫投卵者，虚实是也。\n\n凡战者，以正合，以奇胜。故善出奇者，无穷如天地，不竭如江海。终而复始，日月是也。死而更生，四时是也。声不过五，五声之变，不可胜听也；色不过五，五色之变，不可胜观也；味不过五，五味之变，不可胜尝也；战势不过奇正，奇正之变，不可胜穷也。奇正相生，如循环之无端，孰能穷之哉！\n\n激水之疾，至于漂石者，势也；鸷鸟之疾，至于毁折者，节也。故善战者，其势险，其节短。势如扩弩，节如发机。纷纷纭纭，斗乱而不可乱；浑浑沌沌，形圆而不可败。乱生于治，怯生于勇，弱生于强。治乱，数也；勇怯，势也；强弱，形也。\n\n故善动敌者，形之，敌必从之；予之，敌必取之。以利动之，以卒待之。故善战者，求之于势，不责于人故能择人而任势。任势者，其战人也，如转木石。木石之性，安则静，危则动，方则止，圆则行。\n\n故善战人之势，如转圆石于千仞之山者，势也。",
    "sentences": [
      {
        "id": "bing-shi-1",
        "chapterId": "bing-shi",
        "order": 1,
        "original": "凡治众如治寡，分数是也；斗众如斗寡，形名是也；三军之众，可使必受敌而无败者，奇正是也；兵之所加，如以碫投卵者，虚实是也。",
        "words": [
          {
            "word": "奇正",
            "explanation": "正面常规力量与非常规变化手段。",
            "modernMapping": "组合策略"
          },
          {
            "word": "虚实",
            "explanation": "强弱、空实、守备与薄弱处。",
            "modernMapping": "切入点"
          }
        ],
        "translation": "意思是：凡是治兵众如治寡，分数是；斗兵众如斗寡，形势能名是；三军队之兵众，可使必受对手而无失败，奇招正兵是；兵之所加，如以碫投卵，薄弱处坚实处是。",
        "modernApplication": "运营和产品打法要有稳定基本盘，也要保留可快速切换的非常规动作，例如灰度发布、侧翼渠道或差异化功能。",
        "relatedConceptIds": [
          "zheng-qi",
          "bi-shi-ji-xu",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-2",
        "chapterId": "bing-shi",
        "order": 2,
        "original": "凡战者，以正合，以奇胜。",
        "words": [
          {
            "word": "凡战者",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "以正合",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "以奇胜",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "凡作战，通常用正面力量接敌，再用出奇变化取胜。",
        "modernApplication": "用于借势造势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zheng-qi",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-3",
        "chapterId": "bing-shi",
        "order": 3,
        "original": "故善出奇者，无穷如天地，不竭如江海。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "白话说就是：所以善出奇招，无穷如时机地利，不竭如江海。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zheng-qi",
          "zhi-tian-zhi-di",
          "shang-bing-fa-mou"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-4",
        "chapterId": "bing-shi",
        "order": 4,
        "original": "终而复始，日月是也。",
        "words": [
          {
            "word": "终而复始",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "日月是也",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "换成今天的话：终而复始，日月是。",
        "modernApplication": "用于借势造势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-5",
        "chapterId": "bing-shi",
        "order": 5,
        "original": "死而更生，四时是也。",
        "words": [
          {
            "word": "死而更生",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "四时是也",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "这句在说：死而更生，四时是。",
        "modernApplication": "用于借势造势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-6",
        "chapterId": "bing-shi",
        "order": 6,
        "original": "声不过五，五声之变，不可胜听也；色不过五，五色之变，不可胜观也；味不过五，五味之变，不可胜尝也；战势不过奇正，奇正之变，不可胜穷也。",
        "words": [
          {
            "word": "不可胜",
            "explanation": "自己先做到不容易被击败。",
            "modernMapping": "防守底线"
          },
          {
            "word": "可胜",
            "explanation": "对方露出可利用的破绽。",
            "modernMapping": "机会窗口"
          },
          {
            "word": "奇正",
            "explanation": "正面常规力量与非常规变化手段。",
            "modernMapping": "组合策略"
          },
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          }
        ],
        "translation": "意思是：声不过五，五声之变，不可取胜听；色不过五，五色之变，不可取胜观；味不过五，五味之变，不可取胜尝；作战势能不过奇招正兵，奇招正兵之变，不可取胜穷。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-7",
        "chapterId": "bing-shi",
        "order": 7,
        "original": "奇正相生，如循环之无端，孰能穷之哉！",
        "words": [
          {
            "word": "奇正",
            "explanation": "正面常规力量与非常规变化手段。",
            "modernMapping": "组合策略"
          },
          {
            "word": "奇正相生",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "如循环之",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "可以理解为：奇招正兵相生，如循环之无端，哪一方能穷之哉！",
        "modernApplication": "运营和产品打法要有稳定基本盘，也要保留可快速切换的非常规动作，例如灰度发布、侧翼渠道或差异化功能。",
        "relatedConceptIds": [
          "zheng-qi",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-8",
        "chapterId": "bing-shi",
        "order": 8,
        "original": "激水之疾，至于漂石者，势也；鸷鸟之疾，至于毁折者，节也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "节",
            "explanation": "力量释放的时机与节奏。",
            "modernMapping": "执行节拍"
          }
        ],
        "translation": "白话说就是：激水之疾，至于漂石，势能；鸷鸟之疾，至于毁折，节。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "zhi-tian-zhi-di",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-9",
        "chapterId": "bing-shi",
        "order": 9,
        "original": "故善战者，其势险，其节短。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "节",
            "explanation": "力量释放的时机与节奏。",
            "modernMapping": "执行节拍"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "换成今天的话：所以善作战，其势能险，其节短。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "zhi-tian-zhi-di",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-10",
        "chapterId": "bing-shi",
        "order": 10,
        "original": "势如扩弩，节如发机。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "节",
            "explanation": "力量释放的时机与节奏。",
            "modernMapping": "执行节拍"
          }
        ],
        "translation": "这句在说：势能如扩弩，节如发机。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-11",
        "chapterId": "bing-shi",
        "order": 11,
        "original": "纷纷纭纭，斗乱而不可乱；浑浑沌沌，形圆而不可败。",
        "words": [
          {
            "word": "纷纷纭纭",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "斗乱而不",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "可乱",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "意思是：纷纷纭纭，斗乱而不可乱；浑浑沌沌，形势能圆而不可失败。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-12",
        "chapterId": "bing-shi",
        "order": 12,
        "original": "乱生于治，怯生于勇，弱生于强。",
        "words": [
          {
            "word": "乱生于治",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "怯生于勇",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "弱生于强",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "可以理解为：乱生于治，怯生于勇，弱生于强。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-13",
        "chapterId": "bing-shi",
        "order": 13,
        "original": "治乱，数也；勇怯，势也；强弱，形也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "治乱",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "数也",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "白话说就是：治乱，数；勇怯，势能；强弱，形势能。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-14",
        "chapterId": "bing-shi",
        "order": 14,
        "original": "故善动敌者，形之，敌必从之；予之，敌必取之。",
        "words": [
          {
            "word": "故善动敌",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "形之",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "敌必从之",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "换成今天的话：所以善动对手，形势能之，对手必从之；予之，对手必取之。",
        "modernApplication": "用于借势造势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-15",
        "chapterId": "bing-shi",
        "order": 15,
        "original": "以利动之，以卒待之。",
        "words": [
          {
            "word": "以利动之",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "以卒待之",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "这句在说：以利益动之，以士卒待之。",
        "modernApplication": "用于借势造势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-16",
        "chapterId": "bing-shi",
        "order": 16,
        "original": "故善战者，求之于势，不责于人故能择人而任势。",
        "words": [
          {
            "word": "任势",
            "explanation": "让结构和趋势放大人的作用。",
            "modernMapping": "杠杆设计"
          },
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          }
        ],
        "translation": "善于作战的人追求形势带来的力量，而不是单纯苛责个人，所以能够选择合适的人并让他们借势发挥。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-17",
        "chapterId": "bing-shi",
        "order": 17,
        "original": "任势者，其战人也，如转木石。",
        "words": [
          {
            "word": "任势",
            "explanation": "让结构和趋势放大人的作用。",
            "modernMapping": "杠杆设计"
          },
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          }
        ],
        "translation": "可以理解为：任势能，其作战人，如转木石。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-18",
        "chapterId": "bing-shi",
        "order": 18,
        "original": "木石之性，安则静，危则动，方则止，圆则行。",
        "words": [
          {
            "word": "木石之性",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "安则静",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "危则动",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "白话说就是：木石之性，安则静，危则动，方则止，圆则行。",
        "modernApplication": "用于借势造势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-19",
        "chapterId": "bing-shi",
        "order": 19,
        "original": "故善战人之势，如转圆石于千仞之山者，势也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "故善战人",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          },
          {
            "word": "之势",
            "explanation": "本句实际出现的关键表达，需要放回“借势造势”语境中理解。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "换成今天的话：所以善作战人之势能，如转圆石于千仞之山，势能。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "zhi-tian-zhi-di",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "important"
      }
    ],
    "coreSummary": "兵势篇的核心不是记住名句，而是形成“借势造势”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于借势造势的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "shang-bing-fa-mou",
      "bu-zhan-er-qu-ren"
    ],
    "relatedCaseIds": [
      "chang-ping",
      "brand-position"
    ],
    "relatedQuoteIds": [
      "q05"
    ]
  },
  {
    "id": "xu-shi",
    "order": 6,
    "title": "虚实篇",
    "slug": "xu-shi",
    "theme": "虚实变化",
    "summary": "不硬碰硬，攻击薄弱处。",
    "modernMeaning": "虚实篇对应现代能力：虚实变化。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "致人而不致于人",
      "攻其所必救",
      "避实击虚"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "抢占主动位置",
      "控制节奏而不被牵引",
      "攻击不防守处",
      "避实击虚"
    ],
    "fullOriginal": "凡先处战地而待敌者佚，后处战地而趋战者劳。故善战者，致人而不致于人。能使敌人自至者，利之也；能使敌人不得至者，害之也。故敌佚能劳之，饱能饥之，安能动之。出其所必趋，趋其所不意。\n\n行千里而不劳者，行于无人之地也；攻而必取者，攻其所不守也。守而必固者，守其所必攻也。故善攻者，敌不知其所守；善守者，敌不知其所攻。微乎微乎，至于无形；神乎神乎，至于无声，故能为敌之司命。进而不可御者，冲其虚也；退而不可追者，速而不可及也。故我欲战，敌虽高垒深沟，不得不与我战者，攻其所必救也；我不欲战，虽画地而守之，敌不得与我战者，乖其所之也。故形人而我无形，则我专而敌分。我专为一，敌分为十，是以十攻其一也。则我众敌寡，能以众击寡者，则吾之所与战者约矣。吾所与战之地不可知，不可知则敌所备者多，敌所备者多，则吾所与战者寡矣。故备前则后寡，备后则前寡，备左则右寡，备右则左寡，无所不备，则无所不寡。寡者，备人者也；众者，使人备己者也。故知战之地，知战之日，则可千里而会战；不知战之地，不知战日，则左不能救右，右不能救左，前不能救后，后不能救前，而况远者数十里，近者数里乎！\n\n以吾度之，越人之兵虽多，亦奚益于胜哉！\n\n故曰：胜可为也。敌虽众，可使无斗。故策之而知得失之计，候之而知动静之理，形之而知死生之地，角之而知有余不足之处。故形兵之极，至于无形。无形则深间不能窥，智者不能谋。因形而措胜于众，众不能知。人皆知我所以胜之形，而莫知吾所以制胜之形。故其战胜不复，而应形于无穷。\n\n夫兵形象水，水之行避高而趋下，兵之形避实而击虚；水因地而制流，兵因敌而制胜。故兵无常势，水无常形。能因敌变化而取胜者，谓之神。故五行无常胜，四时无常位，日有短长，月有死生。",
    "sentences": [
      {
        "id": "xu-shi-1",
        "chapterId": "xu-shi",
        "order": 1,
        "original": "凡先处战地而待敌者佚，后处战地而趋战者劳。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "凡先处战",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "地而待敌",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "可以理解为：凡是先处作战地利而待对手佚，后处作战地利而趋作战劳。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-2",
        "chapterId": "xu-shi",
        "order": 2,
        "original": "故善战者，致人而不致于人。",
        "words": [
          {
            "word": "致人",
            "explanation": "调动对手，而不是被对手牵着走。",
            "modernMapping": "主动权"
          },
          {
            "word": "故善战者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "致人而不",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "白话说就是：所以善作战，致人而不致于人。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-ren-bu-zhi-yu-ren",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-3",
        "chapterId": "xu-shi",
        "order": 3,
        "original": "能使敌人自至者，利之也；能使敌人不得至者，害之也。",
        "words": [
          {
            "word": "能使敌人",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "自至者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "利之也",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "换成今天的话：能使对手人自至，利益之；能使对手人不得至，风险之。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-4",
        "chapterId": "xu-shi",
        "order": 4,
        "original": "故敌佚能劳之，饱能饥之，安能动之。",
        "words": [
          {
            "word": "故敌佚能",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "劳之",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "饱能饥之",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "这句在说：所以对手佚能劳之，饱能饥之，安能动之。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-5",
        "chapterId": "xu-shi",
        "order": 5,
        "original": "出其所必趋，趋其所不意。",
        "words": [
          {
            "word": "出其所必",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "趋其所不",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "意思是：出其所必趋，趋其所不意。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "gong-qi-suo-bi-jiu",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-6",
        "chapterId": "xu-shi",
        "order": 6,
        "original": "行千里而不劳者，行于无人之地也；攻而必取者，攻其所不守也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "行千里而",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "不劳者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "可以理解为：行千里而不劳，行于无人之地利；进攻而必取，进攻其所不防守。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-7",
        "chapterId": "xu-shi",
        "order": 7,
        "original": "守而必固者，守其所必攻也。",
        "words": [
          {
            "word": "守而必固",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "守其所必",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "攻也",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "白话说就是：防守而必固，防守其所必进攻。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-8",
        "chapterId": "xu-shi",
        "order": 8,
        "original": "故善攻者，敌不知其所守；善守者，敌不知其所攻。",
        "words": [
          {
            "word": "故善攻者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "敌不知其",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "所守",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "换成今天的话：所以善进攻，对手不知其所防守；善防守，对手不知其所进攻。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-9",
        "chapterId": "xu-shi",
        "order": 9,
        "original": "微乎微乎，至于无形；神乎神乎，至于无声，故能为敌之司命。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "微乎微乎",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "至于无形",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "这句在说：微乎微乎，至于无形势能；神乎神乎，至于无声，所以能为对手之司命。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-10",
        "chapterId": "xu-shi",
        "order": 10,
        "original": "进而不可御者，冲其虚也；退而不可追者，速而不可及也。",
        "words": [
          {
            "word": "进而不可",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "御者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "冲其虚也",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "意思是：进而不可御，冲其薄弱处；退而不可追，速而不可及。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-11",
        "chapterId": "xu-shi",
        "order": 11,
        "original": "故我欲战，敌虽高垒深沟，不得不与我战者，攻其所必救也；我不欲战，虽画地而守之，敌不得与我战者，乖其所之也。",
        "words": [
          {
            "word": "攻其所必救",
            "explanation": "攻击对方必须救援的关键点。",
            "modernMapping": "关键节点"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "可以理解为：所以我欲作战，对手虽高垒深沟，不得不与我作战，进攻其所必救；我不欲作战，虽画地利而防守之，对手不得与我作战，乖其所之。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "gong-qi-suo-bi-jiu",
          "zhi-tian-zhi-di"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-12",
        "chapterId": "xu-shi",
        "order": 12,
        "original": "故形人而我无形，则我专而敌分。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "故形人而",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "我无形",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "白话说就是：所以形势能人而我无形势能，则我专而对手分。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-13",
        "chapterId": "xu-shi",
        "order": 13,
        "original": "我专为一，敌分为十，是以十攻其一也。",
        "words": [
          {
            "word": "我专为一",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "敌分为十",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "是以十攻",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "换成今天的话：我专为一，对手分为十，是以十进攻其一。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-14",
        "chapterId": "xu-shi",
        "order": 14,
        "original": "则我众敌寡，能以众击寡者，则吾之所与战者约矣。",
        "words": [
          {
            "word": "则我众敌",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "能以众击",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "寡者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "这句在说：则我兵众对手寡，能以兵众击寡，则我方之所与作战约了。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-15",
        "chapterId": "xu-shi",
        "order": 15,
        "original": "吾所与战之地不可知，不可知则敌所备者多，敌所备者多，则吾所与战者寡矣。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "吾所与战",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "之地不可",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "意思是：我方所与作战之地利不可知，不可知则对手所备多，对手所备多，则我方所与作战寡了。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-16",
        "chapterId": "xu-shi",
        "order": 16,
        "original": "故备前则后寡，备后则前寡，备左则右寡，备右则左寡，无所不备，则无所不寡。",
        "words": [
          {
            "word": "故备前则",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "后寡",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "备后则前",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "可以理解为：所以备前则后寡，备后则前寡，备左则右寡，备右则左寡，无所不备，则无所不寡。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-17",
        "chapterId": "xu-shi",
        "order": 17,
        "original": "寡者，备人者也；众者，使人备己者也。",
        "words": [
          {
            "word": "寡者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "备人者也",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "众者",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "白话说就是：寡，备人；兵众，使人备己。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-18",
        "chapterId": "xu-shi",
        "order": 18,
        "original": "故知战之地，知战之日，则可千里而会战；不知战之地，不知战日，则左不能救右，右不能救左，前不能救后，后不能救前，而况远者数十里，近者数里乎！",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          }
        ],
        "translation": "换成今天的话：所以知作战之地利，知作战之日，则可千里而会作战；不知作战之地利，不知作战日，则左不能救右，右不能救左，前不能救后，后不能救前，而况远数十里，近数里乎！",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-19",
        "chapterId": "xu-shi",
        "order": 19,
        "original": "以吾度之，越人之兵虽多，亦奚益于胜哉！",
        "words": [
          {
            "word": "以吾度之",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "越人之兵",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "虽多",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "这句在说：以我方度之，越人之兵虽多，亦奚益于取胜哉！",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-20",
        "chapterId": "xu-shi",
        "order": 20,
        "original": "故曰：胜可为也。",
        "words": [
          {
            "word": "故曰",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "胜可为也",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "意思是：所以曰：取胜可为。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-21",
        "chapterId": "xu-shi",
        "order": 21,
        "original": "敌虽众，可使无斗。",
        "words": [
          {
            "word": "敌虽众",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "可使无斗",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "可以理解为：对手虽兵众，可使无斗。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-22",
        "chapterId": "xu-shi",
        "order": 22,
        "original": "故策之而知得失之计，候之而知动静之理，形之而知死生之地，角之而知有余不足之处。",
        "words": [
          {
            "word": "死生之地",
            "explanation": "关系生存与失败代价的处境。",
            "modernMapping": "风险边界"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "白话说就是：所以策之而知得失之计算和比较，候之而知动静之理，形势能之而知关系生死的处境，角之而知有余不足之处。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-23",
        "chapterId": "xu-shi",
        "order": 23,
        "original": "故形兵之极，至于无形。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "故形兵之",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "至于无形",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "换成今天的话：所以形势能兵之极，至于无形势能。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t29",
          "t06"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-24",
        "chapterId": "xu-shi",
        "order": 24,
        "original": "无形则深间不能窥，智者不能谋。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "无形则深",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "间不能窥",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "这句在说：无形势能则深情报人员不能窥，智不能谋。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "yong-jian",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-25",
        "chapterId": "xu-shi",
        "order": 25,
        "original": "因形而措胜于众，众不能知。",
        "words": [
          {
            "word": "因形而措",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "胜于众",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "众不能知",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "意思是：因形势能而措取胜于兵众，兵众不能知。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t01",
          "t08"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-26",
        "chapterId": "xu-shi",
        "order": 26,
        "original": "人皆知我所以胜之形，而莫知吾所以制胜之形。",
        "words": [
          {
            "word": "人皆知我",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "所以胜之",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "而莫知吾",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "可以理解为：人皆知我所以取胜之形势能，而没有谁知我方所以制取胜之形势能。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t02",
          "t09"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-27",
        "chapterId": "xu-shi",
        "order": 27,
        "original": "故其战胜不复，而应形于无穷。",
        "words": [
          {
            "word": "故其战胜",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "不复",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "而应形于",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "白话说就是：所以其作战取胜不复，而应形势能于无穷。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t03",
          "t10"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-28",
        "chapterId": "xu-shi",
        "order": 28,
        "original": "夫兵形象水，水之行避高而趋下，兵之形避实而击虚；水因地而制流，兵因敌而制胜。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "夫兵形象",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "水之行避",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "用兵的形态像水：水避开高处流向低处，用兵避开坚实处打击薄弱处；水随地势流动，用兵随敌情取胜。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bi-shi-ji-xu",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "xu-shi-29",
        "chapterId": "xu-shi",
        "order": 29,
        "original": "故兵无常势，水无常形。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "故兵无常",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "水无常形",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "这句在说：所以兵无常势能，水无常形势能。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-30",
        "chapterId": "xu-shi",
        "order": 30,
        "original": "能因敌变化而取胜者，谓之神。",
        "words": [
          {
            "word": "能因敌变",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "化而取胜",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "谓之神",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "能够根据对手变化而取胜的人，才称得上用兵神妙。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-31",
        "chapterId": "xu-shi",
        "order": 31,
        "original": "故五行无常胜，四时无常位，日有短长，月有死生。",
        "words": [
          {
            "word": "故五行无",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "常胜",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "四时无常",
            "explanation": "本句实际出现的关键表达，需要放回“虚实变化”语境中理解。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "可以理解为：所以五行无常取胜，四时无常位，日有短长，月有死生。",
        "modernApplication": "用于虚实变化时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "jing-xing",
          "project-kickoff"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "important"
      }
    ],
    "coreSummary": "虚实篇的核心不是记住名句，而是形成“虚实变化”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于虚实变化的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "bu-zhan-er-qu-ren",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "jing-xing",
      "project-kickoff"
    ],
    "relatedQuoteIds": [
      "q06"
    ]
  },
  {
    "id": "jun-zheng",
    "order": 7,
    "title": "军争篇",
    "slug": "jun-zheng",
    "theme": "争夺主动权",
    "summary": "在复杂行动中抢占关键位置。",
    "modernMeaning": "军争篇对应现代能力：争夺主动权。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "以迂为直"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "说明军争最难",
      "以迂为直以患为利",
      "强调外部关系与情报",
      "管理气势与心理"
    ],
    "fullOriginal": "凡用兵之法，将受命于君，合军聚众，交和而舍，莫难于军争。军争之难者，以迂为直，以患为利。\n\n故迂其途，而诱之以利，后人发，先人至，此知迂直之计者也。军争为利，军争为危。举军而争利则不及，委军而争利则辎重捐。是故卷甲而趋，日夜不处，倍道兼行，百里而争利，则擒三将军，劲者先，疲者后，其法十一而至；五十里而争利，则蹶上将军，其法半至；三十里而争利，则三分之二至。是故军无辎重则亡，无粮食则亡，无委积则亡。故不知诸侯之谋者，不能豫交；不知山林、险阻、沮泽之形者，不能行军；不用乡导者，不能得地利。故兵以诈立，以利动，以分和为变者也。故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。掠乡分众，廓地分利，悬权而动。先知迂直之计者胜，此军争之法也。\n\n《军政》曰：“言不相闻，故为之金鼓；视不相见，故为之旌旗。”夫金鼓旌旗者，所以一民之耳目也。民既专一，则勇者不得独进，怯者不得独退，此用众之法也。故夜战多金鼓，昼战多旌旗，所以变人之耳目也。\n\n三军可夺气，将军可夺心。是故朝气锐，昼气惰，暮气归。善用兵者，避其锐气，击其惰归，此治气者也。以治待乱，以静待哗，此治心者也。以近待远，以佚待劳，以饱待饥，此治力者也。无邀正正之旗，无击堂堂之陈，此治变者也。\n\n故用兵之法，高陵勿向，背丘勿逆，佯北勿从，锐卒勿攻，饵兵勿食，归师勿遏，围师遗阙，穷寇勿迫，此用兵之法也。",
    "sentences": [
      {
        "id": "jun-zheng-1",
        "chapterId": "jun-zheng",
        "order": 1,
        "original": "凡用兵之法，将受命于君，合军聚众，交和而舍，莫难于军争。",
        "words": [
          {
            "word": "军争",
            "explanation": "争夺先机、位置和主动权。",
            "modernMapping": "节奏竞争"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "白话说就是：凡是用兵的基本方制度，将领受命于君，合军队聚兵众，交和而舍，没有谁难于军队争。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "yi-yu-wei-zhi",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-2",
        "chapterId": "jun-zheng",
        "order": 2,
        "original": "军争之难者，以迂为直，以患为利。",
        "words": [
          {
            "word": "军争",
            "explanation": "争夺先机、位置和主动权。",
            "modernMapping": "节奏竞争"
          },
          {
            "word": "军争之难",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以迂为直",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "换成今天的话：军队争之难，以迂为直，以患为利益。",
        "modernApplication": "跨部门项目要把路径、节奏和补给算清楚：有些绕路反而更快，有些看似快进会丢掉关键资源。",
        "relatedConceptIds": [
          "yi-yu-wei-zhi",
          "li-hai-bing-guan",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-3",
        "chapterId": "jun-zheng",
        "order": 3,
        "original": "故迂其途，而诱之以利，后人发，先人至，此知迂直之计者也。",
        "words": [
          {
            "word": "迂直之计",
            "explanation": "用绕路、诱导等方式实现更快抵达目标。",
            "modernMapping": "路径设计"
          },
          {
            "word": "故迂其途",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "而诱之以",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "这句在说：所以迂其途，而诱之以利益，后人发，先人至，此知迂直之计算和比较。",
        "modernApplication": "做产品、投资或组织变革前，先列出可验证的有利条件和不利条件，用证据数量决定是否推进。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "yi-yu-wei-zhi",
          "li-hai-bing-guan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-4",
        "chapterId": "jun-zheng",
        "order": 4,
        "original": "军争为利，军争为危。",
        "words": [
          {
            "word": "军争",
            "explanation": "争夺先机、位置和主动权。",
            "modernMapping": "节奏竞争"
          },
          {
            "word": "军争为利",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "军争为危",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "意思是：军队争为利益，军队争为危。",
        "modernApplication": "跨部门项目要把路径、节奏和补给算清楚：有些绕路反而更快，有些看似快进会丢掉关键资源。",
        "relatedConceptIds": [
          "yi-yu-wei-zhi",
          "li-hai-bing-guan",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-5",
        "chapterId": "jun-zheng",
        "order": 5,
        "original": "举军而争利则不及，委军而争利则辎重捐。",
        "words": [
          {
            "word": "举军而争",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "利则不及",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "委军而争",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "可以理解为：举军队而争利益则不及，委军队而争利益则辎重捐。",
        "modernApplication": "用于争夺主动权时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-6",
        "chapterId": "jun-zheng",
        "order": 6,
        "original": "是故卷甲而趋，日夜不处，倍道兼行，百里而争利，则擒三将军，劲者先，疲者后，其法十一而至；五十里而争利，则蹶上将军，其法半至；三十里而争利，则三分之二至。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "白话说就是：是所以卷甲而趋，日夜不处，倍共同目标兼行，百里而争利益，则擒三将领军队，劲先，疲后，其制度十一而至；五十里而争利益，则蹶上将领军队，其制度半至；三十里而争利益，则三分之二至。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-7",
        "chapterId": "jun-zheng",
        "order": 7,
        "original": "是故军无辎重则亡，无粮食则亡，无委积则亡。",
        "words": [
          {
            "word": "是故军无",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "辎重则亡",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "无粮食则",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "换成今天的话：是所以军队无辎重则亡，无粮粮食粮食则亡，无委积则亡。",
        "modernApplication": "用于争夺主动权时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-8",
        "chapterId": "jun-zheng",
        "order": 8,
        "original": "故不知诸侯之谋者，不能豫交；不知山林、险阻、沮泽之形者，不能行军；不用乡导者，不能得地利。",
        "words": [
          {
            "word": "行军",
            "explanation": "行军驻扎和观察敌情的方法。",
            "modernMapping": "现场判断"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "这句在说：所以不知诸侯之谋，不能豫交；不知山林、险阻、沮泽之形势能，不能行军队；不用乡导，不能得地利利益。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-9",
        "chapterId": "jun-zheng",
        "order": 9,
        "original": "故兵以诈立，以利动，以分和为变者也。",
        "words": [
          {
            "word": "故兵以诈",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以利动",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以分和为",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "意思是：所以兵以诈立，以利益动，以分和为变。",
        "modernApplication": "用于争夺主动权时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-10",
        "chapterId": "jun-zheng",
        "order": 10,
        "original": "故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。",
        "words": [
          {
            "word": "故其疾如",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "其徐如林",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "侵掠如火",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "可以理解为：所以其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。",
        "modernApplication": "跨部门项目要把路径、节奏和补给算清楚：有些绕路反而更快，有些看似快进会丢掉关键资源。",
        "relatedConceptIds": [
          "yi-yu-wei-zhi",
          "zhi-tian-zhi-di",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-11",
        "chapterId": "jun-zheng",
        "order": 11,
        "original": "掠乡分众，廓地分利，悬权而动。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "掠乡分众",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "廓地分利",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "白话说就是：掠乡分兵众，廓地利分利益，悬权而动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "zhi-ji-zhi-bi"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-12",
        "chapterId": "jun-zheng",
        "order": 12,
        "original": "先知迂直之计者胜，此军争之法也。",
        "words": [
          {
            "word": "迂直之计",
            "explanation": "用绕路、诱导等方式实现更快抵达目标。",
            "modernMapping": "路径设计"
          },
          {
            "word": "军争",
            "explanation": "争夺先机、位置和主动权。",
            "modernMapping": "节奏竞争"
          },
          {
            "word": "先知",
            "explanation": "行动前先掌握对方真实情况。",
            "modernMapping": "前置调研"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "换成今天的话：先知迂直之计算和比较取胜，此军队争之制度。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "zhi-ji-zhi-bi",
          "yi-yu-wei-zhi"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "jun-zheng-13",
        "chapterId": "jun-zheng",
        "order": 13,
        "original": "《军政》曰：“言不相闻，故为之金鼓；视不相见，故为之旌旗。”",
        "words": [
          {
            "word": "金鼓",
            "explanation": "古代传递军令的声音信号。",
            "modernMapping": "同步机制"
          },
          {
            "word": "旌旗",
            "explanation": "古代传递军令的视觉信号。",
            "modernMapping": "协同标识"
          }
        ],
        "translation": "这句在说：《军队政》曰：“言不相闻，所以为之金鼓；视不相见，所以为之旌旗。”",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-14",
        "chapterId": "jun-zheng",
        "order": 14,
        "original": "夫金鼓旌旗者，所以一民之耳目也。",
        "words": [
          {
            "word": "金鼓",
            "explanation": "古代传递军令的声音信号。",
            "modernMapping": "同步机制"
          },
          {
            "word": "旌旗",
            "explanation": "古代传递军令的视觉信号。",
            "modernMapping": "协同标识"
          }
        ],
        "translation": "意思是：大凡是金鼓旌旗，所以一民众之耳目。",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-15",
        "chapterId": "jun-zheng",
        "order": 15,
        "original": "民既专一，则勇者不得独进，怯者不得独退，此用众之法也。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "民既专一",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "则勇者不",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "可以理解为：民众既专一，则勇不得独进，怯不得独退，此用兵众之制度。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-16",
        "chapterId": "jun-zheng",
        "order": 16,
        "original": "故夜战多金鼓，昼战多旌旗，所以变人之耳目也。",
        "words": [
          {
            "word": "金鼓",
            "explanation": "古代传递军令的声音信号。",
            "modernMapping": "同步机制"
          },
          {
            "word": "旌旗",
            "explanation": "古代传递军令的视觉信号。",
            "modernMapping": "协同标识"
          }
        ],
        "translation": "白话说就是：所以夜作战多金鼓，昼作战多旌旗，所以变人之耳目。",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-17",
        "chapterId": "jun-zheng",
        "order": 17,
        "original": "三军可夺气，将军可夺心。",
        "words": [
          {
            "word": "夺气",
            "explanation": "削弱对方士气。",
            "modernMapping": "情绪节奏"
          },
          {
            "word": "夺心",
            "explanation": "动摇对方主将判断。",
            "modernMapping": "心理博弈"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "一支军队的士气可以被削弱，主将的心志也可以被动摇。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-18",
        "chapterId": "jun-zheng",
        "order": 18,
        "original": "是故朝气锐，昼气惰，暮气归。",
        "words": [
          {
            "word": "是故朝气",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "昼气惰",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "暮气归",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "这句在说：是所以朝气锐，昼气惰，暮气归。",
        "modernApplication": "谈判、销售和管理中要观察对方节奏与情绪，在对方锐气最盛时避开，在疲惫和犹豫时推进。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-19",
        "chapterId": "jun-zheng",
        "order": 19,
        "original": "善用兵者，避其锐气，击其惰归，此治气者也。",
        "words": [
          {
            "word": "善用兵者",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "避其锐气",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "击其惰归",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "意思是：善用军队事行动，避其锐气，击其惰归，此治气。",
        "modernApplication": "用于争夺主动权时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-20",
        "chapterId": "jun-zheng",
        "order": 20,
        "original": "以治待乱，以静待哗，此治心者也。",
        "words": [
          {
            "word": "以治待乱",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以静待哗",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "此治心者",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "可以理解为：以治待乱，以静待哗，此治心。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-21",
        "chapterId": "jun-zheng",
        "order": 21,
        "original": "以近待远，以佚待劳，以饱待饥，此治力者也。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "以近待远",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以佚待劳",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "白话说就是：以近待远，以佚待劳，以饱待饥，此治力。",
        "modernApplication": "用于争夺主动权时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-22",
        "chapterId": "jun-zheng",
        "order": 22,
        "original": "无邀正正之旗，无击堂堂之陈，此治变者也。",
        "words": [
          {
            "word": "无邀正正",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "之旗",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "无击堂堂",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "换成今天的话：无邀正兵正兵之旗，无击堂堂之陈，此治变。",
        "modernApplication": "用于争夺主动权时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zheng-qi",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t29",
          "t06"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-23",
        "chapterId": "jun-zheng",
        "order": 23,
        "original": "故用兵之法，高陵勿向，背丘勿逆，佯北勿从，锐卒勿攻，饵兵勿食，归师勿遏，围师遗阙，穷寇勿迫，此用兵之法也。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "故用兵之",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "高陵勿向",
            "explanation": "本句实际出现的关键表达，需要放回“争夺主动权”语境中理解。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "这句在说：所以用兵的基本方制度，高陵勿向，背丘勿逆，佯北勿从，锐士卒勿进攻，饵兵勿粮食，归军队勿遏，围军队遗阙，穷寇勿迫，此用兵的基本方制度。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "important"
      }
    ],
    "coreSummary": "军争篇的核心不是记住名句，而是形成“争夺主动权”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于争夺主动权的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "zhi-ji-zhi-bi",
      "xian-sheng-hou-zhan"
    ],
    "relatedCaseIds": [
      "startup-giant",
      "team-alignment"
    ],
    "relatedQuoteIds": [
      "q07"
    ]
  },
  {
    "id": "jiu-bian",
    "order": 8,
    "title": "九变篇",
    "slug": "jiu-bian",
    "theme": "灵活应变",
    "summary": "不拘泥固定规则，因势变化。",
    "modernMeaning": "九变篇对应现代能力：灵活应变。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "将有五危",
      "利害并观"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "说明因地因势选择",
      "提出有所不为",
      "利害并观",
      "识别领导者五种危险偏向"
    ],
    "fullOriginal": "凡用兵之法，将受命于君，合军聚合。泛地无舍，衢地合交，绝地无留，围地则谋，死地则战，途有所不由，军有所不击，城有所不攻，地有所不争，君命有所不受。\n\n故将通于九变之利者，知用兵矣；将不通九变之利，虽知地形，不能得地之利矣；治兵不知九变之术，虽知五利，不能得人之用矣。\n\n是故智者之虑，必杂于利害，杂于利而务可信也，杂于害而患可解也。是故屈诸侯者以害，役诸侯者以业，趋诸侯者以利。故用兵之法，无恃其不来，恃吾有以待之；无恃其不攻，恃吾有所不可攻也。\n\n故将有五危，必死可杀，必生可虏，忿速可侮，廉洁可辱，爱民可烦。凡此五者，将之过也，用兵之灾也。覆军杀将，必以五危，不可不察也。",
    "sentences": [
      {
        "id": "jiu-bian-1",
        "chapterId": "jiu-bian",
        "order": 1,
        "original": "凡用兵之法，将受命于君，合军聚合。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "换成今天的话：凡是用兵的基本方制度，将领受命于君，合军队聚合。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-2",
        "chapterId": "jiu-bian",
        "order": 2,
        "original": "泛地无舍，衢地合交，绝地无留，围地则谋，死地则战，途有所不由，军有所不击，城有所不攻，地有所不争，君命有所不受。",
        "words": [
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
          },
          {
            "word": "围地",
            "explanation": "进出受限的危险处境。",
            "modernMapping": "受限局面"
          },
          {
            "word": "死地",
            "explanation": "不战则亡的处境。",
            "modernMapping": "背水节点"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "这句在说：泛地利无舍，衢地利合交，绝地利无留，围地利则谋，死地利则作战，途有所不由，军队有所不击，城有所不进攻，地利有所不争，君命有所不受。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-3",
        "chapterId": "jiu-bian",
        "order": 3,
        "original": "故将通于九变之利者，知用兵矣；将不通九变之利，虽知地形，不能得地之利矣；治兵不知九变之术，虽知五利，不能得人之用矣。",
        "words": [
          {
            "word": "九变",
            "explanation": "因地、因势灵活调整的变化原则。",
            "modernMapping": "适应性"
          },
          {
            "word": "地形",
            "explanation": "地势条件及其对行动的帮助或限制。",
            "modernMapping": "环境结构"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "意思是：所以将领通于九变之利益，知用兵了；将领不通九变之利益，虽知地利形势能，不能得地利之利益了；治兵不知九变之术，虽知五利益，不能得人之用了。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-4",
        "chapterId": "jiu-bian",
        "order": 4,
        "original": "是故智者之虑，必杂于利害，杂于利而务可信也，杂于害而患可解也。",
        "words": [
          {
            "word": "利害",
            "explanation": "利益与风险必须同时纳入判断。",
            "modernMapping": "风险收益"
          },
          {
            "word": "是故智者",
            "explanation": "本句实际出现的关键表达，需要放回“灵活应变”语境中理解。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "之虑",
            "explanation": "本句实际出现的关键表达，需要放回“灵活应变”语境中理解。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "可以理解为：是所以智之虑，必杂于利益风险，杂于利益而务可信，杂于风险而患可解。",
        "modernApplication": "风险管理不能只列机会，也要列最坏情况、领导者偏差和备用方案，把“对方不会来”改成“来了怎么办”。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-5",
        "chapterId": "jiu-bian",
        "order": 5,
        "original": "是故屈诸侯者以害，役诸侯者以业，趋诸侯者以利。",
        "words": [
          {
            "word": "是故屈诸",
            "explanation": "本句实际出现的关键表达，需要放回“灵活应变”语境中理解。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "侯者以害",
            "explanation": "本句实际出现的关键表达，需要放回“灵活应变”语境中理解。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "役诸侯者",
            "explanation": "本句实际出现的关键表达，需要放回“灵活应变”语境中理解。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "白话说就是：是所以屈诸侯以风险，役诸侯以业，趋诸侯以利益。",
        "modernApplication": "用于灵活应变时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-6",
        "chapterId": "jiu-bian",
        "order": 6,
        "original": "故用兵之法，无恃其不来，恃吾有以待之；无恃其不攻，恃吾有所不可攻也。",
        "words": [
          {
            "word": "无恃",
            "explanation": "不把希望寄托在对方不会行动上。",
            "modernMapping": "底线预案"
          },
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          }
        ],
        "translation": "换成今天的话：所以用兵的基本方制度，无恃其不来，恃我方有以待之；无恃其不进攻，恃我方有所不可进攻。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "li-hai-bing-guan",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-7",
        "chapterId": "jiu-bian",
        "order": 7,
        "original": "故将有五危，必死可杀，必生可虏，忿速可侮，廉洁可辱，爱民可烦。",
        "words": [
          {
            "word": "五危",
            "explanation": "将领性格中的五类致命偏差。",
            "modernMapping": "领导风险"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "这句在说：所以将领有五危，必死可杀，必生可虏，忿速可侮，廉洁可辱，爱民众可烦。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "jiang-you-wu-wei",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-8",
        "chapterId": "jiu-bian",
        "order": 8,
        "original": "凡此五者，将之过也，用兵之灾也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "凡此五者",
            "explanation": "本句实际出现的关键表达，需要放回“灵活应变”语境中理解。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "将之过也",
            "explanation": "本句实际出现的关键表达，需要放回“灵活应变”语境中理解。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "意思是：凡是此五，将领之过，用兵之灾。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-9",
        "chapterId": "jiu-bian",
        "order": 9,
        "original": "覆军杀将，必以五危，不可不察也。",
        "words": [
          {
            "word": "不可不察",
            "explanation": "不能不慎重考察，强调重大行动前必须先判断利害。",
            "modernMapping": "决策审查"
          },
          {
            "word": "五危",
            "explanation": "将领性格中的五类致命偏差。",
            "modernMapping": "领导风险"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "可以理解为：覆军队杀将领，必以五危，必须慎重考察。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "jiang-you-wu-wei",
          "xian-sheng-hou-zhan",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      }
    ],
    "coreSummary": "九变篇的核心不是记住名句，而是形成“灵活应变”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于灵活应变的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "bu-ke-sheng-zai-ji"
    ],
    "relatedCaseIds": [
      "price-war",
      "resource-fight"
    ],
    "relatedQuoteIds": [
      "q08"
    ]
  },
  {
    "id": "xing-jun",
    "order": 9,
    "title": "行军篇",
    "slug": "xing-jun",
    "theme": "环境判断",
    "summary": "从环境、迹象、行为中识别风险。",
    "modernMeaning": "行军篇对应现代能力：环境判断。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "环境判断",
      "战略",
      "判断"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "说明行军处置原则",
      "观察环境与敌情迹象",
      "从言辞动作判断意图",
      "反对盲目增兵"
    ],
    "fullOriginal": "凡处军相敌，绝山依谷，视生处高，战隆无登，此处山之军也。绝水必远水，客绝水而来，勿迎之于水内，令半渡而击之利，欲战者，无附于水而迎客，视生处高，无迎水流，此处水上之军也。绝斥泽，唯亟去无留，若交军于斥泽之中，必依水草而背众树，此处斥泽之军也。平陆处易，右背高，前死后生，此处平陆之军也。凡此四军之利，黄帝之所以胜四帝也。凡军好高而恶下，贵阳而贱阴，养生而处实，军无百疾，是谓必胜。丘陵堤防，必处其阳而右背之，此兵之利，地之助也。上雨水流至，欲涉者，待其定也。凡地有绝涧、天井、天牢、天罗、天陷、天隙，必亟去之，勿近也。吾远之，敌近之；吾迎之，敌背之。军旁有险阻、潢井、蒹葭、小林、蘙荟者，必谨覆索之，此伏奸之所处也。\n\n敌近而静者，恃其险也；远而挑战者，欲人之进也；其所居易者，利也；众树动者，来也；众草多障者，疑也；鸟起者，伏也；兽骇者，覆也；尘高而锐者，车来也；卑而广者，徒来也；散而条达者，樵采也；少而往来者，营军也；辞卑而备者，进也；辞强而进驱者，退也；轻车先出居其侧者，陈也；无约而请和者，谋也；奔走而陈兵者，期也；半进半退者，诱也；杖而立者，饥也；汲而先饮者，渴也；见利而不进者，劳也；鸟集者，虚也；夜呼者，恐也；军扰者，将不重也；旌旗动者，乱也；吏怒者，倦也；杀马肉食者，军无粮也；悬甀不返其舍者，穷寇也；谆谆𧬈𧬈，徐与人言者，失众也；数赏者，窘也；数罚者，困也；先暴而后畏其众者，不精之至也；来委谢者，欲休息也。兵怒而相迎，久而不合，又不相去，必谨察之。\n\n兵非贵益多也，惟无武进，足以并力料敌取人而已。夫惟无虑而易敌者，必擒于人。卒未亲而罚之，则不服，不服则难用。卒已亲附而罚不行，则不可用。故合之以文，齐之以武，是谓必取。令素行以教其民，则民服；令素不行以教其民，则民不服。令素行者，与众相得也。",
    "sentences": [
      {
        "id": "xing-jun-1",
        "chapterId": "xing-jun",
        "order": 1,
        "original": "凡处军相敌，绝山依谷，视生处高，战隆无登，此处山之军也。",
        "words": [
          {
            "word": "处军",
            "explanation": "选择驻扎、行动位置。",
            "modernMapping": "位置管理"
          },
          {
            "word": "相敌",
            "explanation": "观察对方状态与意图。",
            "modernMapping": "信号识别"
          }
        ],
        "translation": "这句在说：凡是处军队相对手，绝山依谷，视生处高，作战隆无登，此处山之军队。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-2",
        "chapterId": "xing-jun",
        "order": 2,
        "original": "绝水必远水，客绝水而来，勿迎之于水内，令半渡而击之利，欲战者，无附于水而迎客，视生处高，无迎水流，此处水上之军也。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "绝水必远",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "客绝水而",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "意思是：绝水必远水，客绝水而来，勿迎之于水内，令半渡而击之利益，欲作战，无附于水而迎客，视生处高，无迎水流，此处水上之军队。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-3",
        "chapterId": "xing-jun",
        "order": 3,
        "original": "绝斥泽，唯亟去无留，若交军于斥泽之中，必依水草而背众树，此处斥泽之军也。",
        "words": [
          {
            "word": "绝斥泽",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "唯亟去无",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "若交军于",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "可以理解为：绝斥泽，唯亟去无留，若交军队于斥泽之中，必依水草而背兵众树，此处斥泽之军队。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-4",
        "chapterId": "xing-jun",
        "order": 4,
        "original": "平陆处易，右背高，前死后生，此处平陆之军也。",
        "words": [
          {
            "word": "平陆处易",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "右背高",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "前死后生",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "白话说就是：平陆处易，右背高，前死后生，此处平陆之军队。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-5",
        "chapterId": "xing-jun",
        "order": 5,
        "original": "凡此四军之利，黄帝之所以胜四帝也。",
        "words": [
          {
            "word": "凡此四军",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "之利",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "黄帝之所",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "换成今天的话：凡是此四军队之利益，黄帝之所以取胜四帝。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-6",
        "chapterId": "xing-jun",
        "order": 6,
        "original": "凡军好高而恶下，贵阳而贱阴，养生而处实，军无百疾，是谓必胜。",
        "words": [
          {
            "word": "凡军好高",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而恶下",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "贵阳而贱",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "这句在说：凡是军队好高而恶下，贵阳而贱阴，养生而处坚实处，军队无百疾，是谓必取胜。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bi-shi-ji-xu",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-7",
        "chapterId": "xing-jun",
        "order": 7,
        "original": "丘陵堤防，必处其阳而右背之，此兵之利，地之助也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "丘陵堤防",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "必处其阳",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "意思是：丘陵堤防，必处其阳而右背之，此兵之利益，地利之助。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-8",
        "chapterId": "xing-jun",
        "order": 8,
        "original": "上雨水流至，欲涉者，待其定也。",
        "words": [
          {
            "word": "上雨水流",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "欲涉者",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "待其定也",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "可以理解为：上雨水流至，欲涉，待其定。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-9",
        "chapterId": "xing-jun",
        "order": 9,
        "original": "凡地有绝涧、天井、天牢、天罗、天陷、天隙，必亟去之，勿近也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "白话说就是：凡是地利有绝涧、时机井、时机牢、时机罗、时机陷、时机隙，必亟去之，勿近。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-10",
        "chapterId": "xing-jun",
        "order": 10,
        "original": "吾远之，敌近之；吾迎之，敌背之。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "吾远之",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "敌近之",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "换成今天的话：我方远之，对手近之；我方迎之，对手背之。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-11",
        "chapterId": "xing-jun",
        "order": 11,
        "original": "军旁有险阻、潢井、蒹葭、小林、蘙荟者，必谨覆索之，此伏奸之所处也。",
        "words": [
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          },
          {
            "word": "军旁有险",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "潢井",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "这句在说：军队旁有险阻、潢井、蒹葭、小林、蘙荟，必谨覆索之，此伏奸之所处。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-12",
        "chapterId": "xing-jun",
        "order": 12,
        "original": "敌近而静者，恃其险也；远而挑战者，欲人之进也；其所居易者，利也；众树动者，来也；众草多障者，疑也；鸟起者，伏也；兽骇者，覆也；尘高而锐者，车来也；卑而广者，徒来也；散而条达者，樵采也；少而往来者，营军也；辞卑而备者，进也；辞强而进驱者，退也；轻车先出居其侧者，陈也；无约而请和者，谋也；奔走而陈兵者，期也；半进半退者，诱也；杖而立者，饥也；汲而先饮者，渴也；见利而不进者，劳也；鸟集者，虚也；夜呼者，恐也；军扰者，将不重也；旌旗动者，乱也；吏怒者，倦也；杀马肉食者，军无粮也；悬甀不返其舍者，穷寇也；谆谆𧬈𧬈，徐与人言者，失众也；数赏者，窘也；数罚者，困也；先暴而后畏其众者，不精之至也；来委谢者，欲休息也。",
        "words": [
          {
            "word": "旌旗",
            "explanation": "古代传递军令的视觉信号。",
            "modernMapping": "协同标识"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          },
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          }
        ],
        "translation": "意思是：对手近而静，恃其险；远而挑作战，欲人之进；其所居易，利益；兵众树动，来；兵众草多障，疑；鸟起，伏；兽骇，覆；尘高而锐，车来；卑而广，徒来；散而条达，樵采；少而往来，营军队；辞卑而备，进；辞强而进驱，退；轻车先出居其侧，陈；无约而请和，谋；奔走而陈军队事行动，期；半进半退，诱；杖而立，饥；汲而先饮，渴；见利益而不进，劳；鸟集，薄弱处；夜呼，恐；军队扰，将领不重；旌旗动，乱；吏怒，倦；杀马肉粮食，军队无粮粮食；悬甀不返其舍，穷寇；谆谆𧬈𧬈，徐与人言，失兵众；数赏，窘；数罚，困；先暴而后畏其兵众，不精之至；来委谢，欲休息。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "bi-shi-ji-xu",
          "li-hai-bing-guan"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-13",
        "chapterId": "xing-jun",
        "order": 13,
        "original": "兵怒而相迎，久而不合，又不相去，必谨察之。",
        "words": [
          {
            "word": "兵怒而相",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "久而不合",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "又不相去",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "可以理解为：兵怒而相迎，久而不合，又不相去，必谨察之。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-14",
        "chapterId": "xing-jun",
        "order": 14,
        "original": "兵非贵益多也，惟无武进，足以并力料敌取人而已。",
        "words": [
          {
            "word": "兵非贵益",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "多也",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "惟无武进",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "白话说就是：兵非贵益多，惟无武进，足以并力料对手取人而已。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-15",
        "chapterId": "xing-jun",
        "order": 15,
        "original": "夫惟无虑而易敌者，必擒于人。",
        "words": [
          {
            "word": "夫惟无虑",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而易敌者",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "必擒于人",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "换成今天的话：大凡是惟无虑而易对手，必擒于人。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-16",
        "chapterId": "xing-jun",
        "order": 16,
        "original": "卒未亲而罚之，则不服，不服则难用。",
        "words": [
          {
            "word": "卒未亲而",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "罚之",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "则不服",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "这句在说：士卒未亲而罚之，则不服，不服则难用。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-17",
        "chapterId": "xing-jun",
        "order": 17,
        "original": "卒已亲附而罚不行，则不可用。",
        "words": [
          {
            "word": "卒已亲附",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而罚不行",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "则不可用",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "意思是：士卒已亲附而罚不行，则不可用。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-18",
        "chapterId": "xing-jun",
        "order": 18,
        "original": "故合之以文，齐之以武，是谓必取。",
        "words": [
          {
            "word": "故合之以",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "齐之以武",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "是谓必取",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "可以理解为：所以合之以文，齐之以武，是谓必取。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-19",
        "chapterId": "xing-jun",
        "order": 19,
        "original": "令素行以教其民，则民服；令素不行以教其民，则民不服。",
        "words": [
          {
            "word": "令素行以",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "教其民",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "则民服",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "白话说就是：令素行以教其民众，则民众服；令素不行以教其民众，则民众不服。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-20",
        "chapterId": "xing-jun",
        "order": 20,
        "original": "令素行者，与众相得也。",
        "words": [
          {
            "word": "令素行者",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          },
          {
            "word": "与众相得",
            "explanation": "本句实际出现的关键表达，需要放回“环境判断”语境中理解。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "换成今天的话：令素行，与兵众相得。",
        "modernApplication": "用于环境判断时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t29",
          "t06"
        ],
        "quoteLevel": "normal"
      }
    ],
    "coreSummary": "行军篇的核心不是记住名句，而是形成“环境判断”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于环境判断的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "bu-ke-sheng-zai-ji",
      "zheng-qi"
    ],
    "relatedCaseIds": [
      "niche-product",
      "real-decision-maker"
    ],
    "relatedQuoteIds": [
      "q09"
    ]
  },
  {
    "id": "di-xing",
    "order": 10,
    "title": "地形篇",
    "slug": "di-xing",
    "theme": "地形与组织",
    "summary": "不同条件下使用不同策略。",
    "modernMeaning": "地形篇对应现代能力：地形与组织。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "知天知地"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "分类地形",
      "说明不同条件不同策略",
      "地形是辅助条件",
      "知天知地才能持续取胜"
    ],
    "fullOriginal": "地形有通者、有挂者、有支者、有隘者、有险者、有远者。我可以往，彼可以来，曰通。通形者，先居高阳，利粮道，以战则利。可以往，难以返，曰挂。挂形者，敌无备，出而胜之，敌若有备，出而不胜，难以返，不利。我出而不利，彼出而不利，曰支。支形者，敌虽利我，我无出也，引而去之，令敌半出而击之利。隘形者，我先居之，必盈之以待敌。若敌先居之，盈而勿从，不盈而从之。险形者，我先居之，必居高阳以待敌；若敌先居之，引而去之，勿从也。远形者，势均难以挑战，战而不利。凡此六者，地之道也，将之至任，不可不察也。\n\n凡兵有走者、有驰者、有陷者、有崩者、有乱者、有北者。凡此六者，非天地之灾，将之过也。夫势均，以一击十，曰走；卒强吏弱，曰驰；吏强卒弱，曰陷；大吏怒而不服，遇敌怼而自战，将不知其能，曰崩；将弱不严，教道不明，吏卒无常，陈兵纵横，曰乱；将不能料敌，以少合众，以弱击强，兵无选锋，曰北。凡此六者，败之道也，将之至任，不可不察也。\n\n夫地形者，兵之助也。料敌制胜，计险隘远近，上将之道也。知此而用战者必胜，不知此而用战者必败。故战道必胜，主曰无战，必战可也；战道不胜，主曰必战，无战可也。故进不求名，退不避罪，唯民是保，而利于主，国之宝也。\n\n视卒如婴儿，故可以与之赴深溪；视卒如爱子，故可与之俱死。厚而不能使，爱而不能令，乱而不能治，譬若骄子，不可用也。\n\n知吾卒之可以击，而不知敌之不可击，胜之半也；知敌之可击，而不知吾卒之不可以击，胜之半也；知敌之可击，知吾卒之可以击，而不知地形之不可以战，胜之半也。故知兵者，动而不迷，举而不穷。故曰：知彼知己，胜乃不殆；知天知地，胜乃可全。",
    "sentences": [
      {
        "id": "di-xing-1",
        "chapterId": "di-xing",
        "order": 1,
        "original": "地形有通者、有挂者、有支者、有隘者、有险者、有远者。",
        "words": [
          {
            "word": "地形",
            "explanation": "地势条件及其对行动的帮助或限制。",
            "modernMapping": "环境结构"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "通",
            "explanation": "双方都可往来的地形。",
            "modernMapping": "开放市场"
          },
          {
            "word": "挂",
            "explanation": "进入容易返回困难的地形。",
            "modernMapping": "退出成本"
          }
        ],
        "translation": "意思是：地利形势能有通、有挂、有支、有隘、有险、有远。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-2",
        "chapterId": "di-xing",
        "order": 2,
        "original": "我可以往，彼可以来，曰通。",
        "words": [
          {
            "word": "通",
            "explanation": "双方都可往来的地形。",
            "modernMapping": "开放市场"
          },
          {
            "word": "我可以往",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "彼可以来",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "可以理解为：我可以往，对方可以来，曰通。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-3",
        "chapterId": "di-xing",
        "order": 3,
        "original": "通形者，先居高阳，利粮道，以战则利。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "通",
            "explanation": "双方都可往来的地形。",
            "modernMapping": "开放市场"
          }
        ],
        "translation": "白话说就是：通形势能，先居高阳，利益粮粮食共同目标，以作战则利益。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "li-hai-bing-guan",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-4",
        "chapterId": "di-xing",
        "order": 4,
        "original": "可以往，难以返，曰挂。",
        "words": [
          {
            "word": "挂",
            "explanation": "进入容易返回困难的地形。",
            "modernMapping": "退出成本"
          },
          {
            "word": "可以往",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "难以返",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "换成今天的话：可以往，难以返，曰挂。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-5",
        "chapterId": "di-xing",
        "order": 5,
        "original": "挂形者，敌无备，出而胜之，敌若有备，出而不胜，难以返，不利。",
        "words": [
          {
            "word": "挂",
            "explanation": "进入容易返回困难的地形。",
            "modernMapping": "退出成本"
          },
          {
            "word": "挂形者",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "敌无备",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "这句在说：挂形势能，对手无备，出而取胜之，对手若有备，出而不取胜，难以返，不利益。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bi-shi-ji-xu",
          "li-hai-bing-guan",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-6",
        "chapterId": "di-xing",
        "order": 6,
        "original": "我出而不利，彼出而不利，曰支。",
        "words": [
          {
            "word": "支",
            "explanation": "双方出击都不利的地形。",
            "modernMapping": "僵持局面"
          },
          {
            "word": "我出而不",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "彼出而不",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "意思是：我出而不利益，对方出而不利益，曰支。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-7",
        "chapterId": "di-xing",
        "order": 7,
        "original": "支形者，敌虽利我，我无出也，引而去之，令敌半出而击之利。",
        "words": [
          {
            "word": "支",
            "explanation": "双方出击都不利的地形。",
            "modernMapping": "僵持局面"
          },
          {
            "word": "支形者",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "敌虽利我",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "可以理解为：支形势能，对手虽利益我，我无出，引而去之，令对手半出而击之利益。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-8",
        "chapterId": "di-xing",
        "order": 8,
        "original": "隘形者，我先居之，必盈之以待敌。",
        "words": [
          {
            "word": "隘",
            "explanation": "狭窄关口。",
            "modernMapping": "瓶颈资源"
          },
          {
            "word": "隘形者",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "我先居之",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "白话说就是：隘形势能，我先居之，必盈之以待对手。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-9",
        "chapterId": "di-xing",
        "order": 9,
        "original": "若敌先居之，盈而勿从，不盈而从之。",
        "words": [
          {
            "word": "若敌先居",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "盈而勿从",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "不盈而从",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "换成今天的话：若对手先居之，盈而勿从，不盈而从之。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-10",
        "chapterId": "di-xing",
        "order": 10,
        "original": "险形者，我先居之，必居高阳以待敌；若敌先居之，引而去之，勿从也。",
        "words": [
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          },
          {
            "word": "险形者",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "我先居之",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "这句在说：险形势能，我先居之，必居高阳以待对手；若对手先居之，引而去之，勿从。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-11",
        "chapterId": "di-xing",
        "order": 11,
        "original": "远形者，势均难以挑战，战而不利。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          }
        ],
        "translation": "意思是：远形势能，势能均难以挑作战，作战而不利益。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "relatedConceptIds": [
          "shi-neng",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-12",
        "chapterId": "di-xing",
        "order": 12,
        "original": "凡此六者，地之道也，将之至任，不可不察也。",
        "words": [
          {
            "word": "不可不察",
            "explanation": "不能不慎重考察，强调重大行动前必须先判断利害。",
            "modernMapping": "决策审查"
          },
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "可以理解为：凡是此六，地利之共同目标，将领之至任，必须慎重考察。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-13",
        "chapterId": "di-xing",
        "order": 13,
        "original": "凡兵有走者、有驰者、有陷者、有崩者、有乱者、有北者。",
        "words": [
          {
            "word": "凡兵有走",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "有驰者",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "有陷者",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "白话说就是：凡是兵有走、有驰、有陷、有崩、有乱、有北。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-14",
        "chapterId": "di-xing",
        "order": 14,
        "original": "凡此六者，非天地之灾，将之过也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "换成今天的话：凡是此六，非时机地利之灾，将领之过。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-15",
        "chapterId": "di-xing",
        "order": 15,
        "original": "夫势均，以一击十，曰走；卒强吏弱，曰驰；吏强卒弱，曰陷；大吏怒而不服，遇敌怼而自战，将不知其能，曰崩；将弱不严，教道不明，吏卒无常，陈兵纵横，曰乱；将不能料敌，以少合众，以弱击强，兵无选锋，曰北。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          }
        ],
        "translation": "这句在说：大凡是势能均，以一击十，曰走；士卒强吏弱，曰驰；吏强士卒弱，曰陷；大吏怒而不服，遇对手怼而自作战，将领不知其能，曰崩；将领弱不严，教共同目标不明，吏士卒无常，陈兵纵横，曰乱；将领不能料对手，以少合兵众，以弱击强，兵无选锋，曰北。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shi-neng",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-16",
        "chapterId": "di-xing",
        "order": 16,
        "original": "凡此六者，败之道也，将之至任，不可不察也。",
        "words": [
          {
            "word": "不可不察",
            "explanation": "不能不慎重考察，强调重大行动前必须先判断利害。",
            "modernMapping": "决策审查"
          },
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "意思是：凡是此六，失败之共同目标，将领之至任，必须慎重考察。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-17",
        "chapterId": "di-xing",
        "order": 17,
        "original": "夫地形者，兵之助也。",
        "words": [
          {
            "word": "地形",
            "explanation": "地势条件及其对行动的帮助或限制。",
            "modernMapping": "环境结构"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "地形是用兵的重要辅助条件。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-18",
        "chapterId": "di-xing",
        "order": 18,
        "original": "料敌制胜，计险隘远近，上将之道也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "隘",
            "explanation": "狭窄关口。",
            "modernMapping": "瓶颈资源"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "白话说就是：料对手制取胜，计算和比较险隘远近，上将领之共同目标。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "zhi-tian-zhi-di",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-19",
        "chapterId": "di-xing",
        "order": 19,
        "original": "知此而用战者必胜，不知此而用战者必败。",
        "words": [
          {
            "word": "知此而用",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "战者必胜",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "不知此而",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "换成今天的话：知此而用作战必取胜，不知此而用作战必失败。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t29",
          "t06"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-20",
        "chapterId": "di-xing",
        "order": 20,
        "original": "故战道必胜，主曰无战，必战可也；战道不胜，主曰必战，无战可也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "故战道必",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "主曰无战",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "这句在说：所以作战共同目标必取胜，君主曰无作战，必作战可；作战共同目标不取胜，君主曰必作战，无作战可。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-21",
        "chapterId": "di-xing",
        "order": 21,
        "original": "故进不求名，退不避罪，唯民是保，而利于主，国之宝也。",
        "words": [
          {
            "word": "故进不求",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "退不避罪",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "唯民是保",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "意思是：所以进不求名，退不避罪，唯民众是保，而利益于君主，国家之宝。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t01",
          "t08"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-22",
        "chapterId": "di-xing",
        "order": 22,
        "original": "视卒如婴儿，故可以与之赴深溪；视卒如爱子，故可与之俱死。",
        "words": [
          {
            "word": "视卒如婴",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "故可以与",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "之赴深溪",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "可以理解为：视士卒如婴儿，所以可以与之赴深溪；视士卒如爱子，所以可与之俱死。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t02",
          "t09"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-23",
        "chapterId": "di-xing",
        "order": 23,
        "original": "厚而不能使，爱而不能令，乱而不能治，譬若骄子，不可用也。",
        "words": [
          {
            "word": "厚而不能",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "爱而不能",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "乱而不能",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "白话说就是：厚而不能使，爱而不能令，乱而不能治，譬若骄子，不可用。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-24",
        "chapterId": "di-xing",
        "order": 24,
        "original": "知吾卒之可以击，而不知敌之不可击，胜之半也；知敌之可击，而不知吾卒之不可以击，胜之半也；知敌之可击，知吾卒之可以击，而不知地形之不可以战，胜之半也。",
        "words": [
          {
            "word": "地形",
            "explanation": "地势条件及其对行动的帮助或限制。",
            "modernMapping": "环境结构"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "换成今天的话：知我方士卒之可以击，而不知对手之不可击，取胜之半；知对手之可击，而不知我方士卒之不可以击，取胜之半；知对手之可击，知我方士卒之可以击，而不知地利形势能之不可以作战，取胜之半。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-25",
        "chapterId": "di-xing",
        "order": 25,
        "original": "故知兵者，动而不迷，举而不穷。",
        "words": [
          {
            "word": "故知兵者",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "动而不迷",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "举而不穷",
            "explanation": "本句实际出现的关键表达，需要放回“地形与组织”语境中理解。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "这句在说：所以知军队事行动，动而不迷，举而不穷。",
        "modernApplication": "用于地形与组织时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-26",
        "chapterId": "di-xing",
        "order": 26,
        "original": "故曰：知彼知己，胜乃不殆；知天知地，胜乃可全。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "所以说：了解对方也了解自己，取胜就不会危险；了解天时和地利，胜利才更完整。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "zhi-ji-zhi-bi",
          "zhi-tian-zhi-di"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "important"
      }
    ],
    "coreSummary": "地形篇的核心不是记住名句，而是形成“地形与组织”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于地形与组织的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "zheng-qi",
      "shi-neng"
    ],
    "relatedCaseIds": [
      "network-effect",
      "avoid-internal-friction"
    ],
    "relatedQuoteIds": [
      "q10"
    ]
  },
  {
    "id": "jiu-di",
    "order": 11,
    "title": "九地篇",
    "slug": "jiu-di",
    "theme": "处境管理",
    "summary": "根据所处局势调整行动方式。",
    "modernMeaning": "九地篇对应现代能力：处境管理。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "死地求生"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "定义九种处境",
      "根据处境调整行动",
      "说明死地求生边界",
      "强调组织联动和速度"
    ],
    "fullOriginal": "用兵之法，有散地，有轻地，有争地，有交地，有衢地，有重地，有泛地，有围地，有死地。诸侯自战其地者，为散地；入人之地不深者，为轻地；我得亦利，彼得亦利者，为争地；我可以往，彼可以来者，为交地；诸侯之地三属，先至而得天下众者，为衢地；入人之地深，背城邑多者，为重地；山林、险阻、沮泽，凡难行之道者，为泛地；所由入者隘，所从归者迂，彼寡可以击吾之众者，为围地；疾战则存，不疾战则亡者，为死地。是故散地则无战，轻地则无止，争地则无攻，交地则无绝，衢地则合交，重地则掠，泛地则行，围地则谋，死地则战。\n\n古之善用兵者，能使敌人前后不相及，众寡不相恃，贵贱不相救，上下不相收，卒离而不集，兵合而不齐。合于利而动，不合于利而止。敢问敌众而整将来，待之若何曰：先夺其所爱则听矣。兵之情主速，乘人之不及。由不虞之道，攻其所不戒也。\n\n凡为客之道，深入则专。主人不克，掠于饶野，三军足食。谨养而勿劳，并气积力，运兵计谋，为不可测。\n\n投之无所往，死且不北。死焉不得，士人尽力。兵士甚陷则不惧，无所往则固，深入则拘，不得已则斗。是故其兵不修而戒，不求而得，不约而亲，不令而信，禁祥去疑，至死无所之。\n\n吾士无余财，非恶货也；无余命，非恶寿也。令发之日，士卒坐者涕沾襟，偃卧者涕交颐，投之无所往，诸、刿之勇也。故善用兵者，譬如率然。率然者，常山之蛇也。击其首则尾至，击其尾则首至，击其中则首尾俱至。敢问兵可使如率然乎？曰可。夫吴人与越人相恶也，当其同舟而济而遇风，其相救也如左右手。是故方马埋轮，未足恃也；齐勇如一，政之道也；刚柔皆得，地之理也。故善用兵者，携手若使一人，不得已也。\n\n将军之事，静以幽，正以治，能愚士卒之耳目，使之无知；易其事，革其谋，使人无识；易其居，迂其途，使民不得虑。帅与之期，如登高而去其梯；帅与之深入诸侯之地，而发其机。若驱群羊，驱而往，驱而来，莫知所之。聚三军之众，投之于险，此谓将军之事也。\n\n九地之变，屈伸之力，人情之理，不可不察也。\n\n凡为客之道，深则专，浅则散。去国越境而师者，绝地也；四彻者，衢地也；入深者，重地也；入浅者，轻地也；背固前隘者，围地也；无所往者，死地也。\n\n是故散地吾将一其志，轻地吾将使之属，争地吾将趋其后，交地吾将谨其守，交地吾将固其结，衢地吾将谨其恃，重地吾将继其食，泛地吾将进其途，围地吾将塞其阙，死地吾将示之以不活。\n\n故兵之情：围则御，不得已则斗，过则从。\n\n是故不知诸侯之谋者，不能预交；不知山林、险阻、沮泽之形者，不能行军；不用乡导，不能得地利。四五者，一不知，非霸王之兵也。夫霸王之兵，伐大国，则其众不得聚；威加于敌，则其交不得合。是故不争天下之交，不养天下之权，信己之私，威加于敌，则其城可拔，其国可隳。\n\n施无法之赏，悬无政之令。犯三军之众，若使一人。犯之以事，勿告以言；犯之以害，勿告以利。投之亡地然后存，陷之死地然后生。夫众陷于害，然后能为胜败。\n\n故为兵之事，在顺详敌之意，并敌一向，千里杀将，是谓巧能成事。是故政举之日，夷关折符，无通其使，厉于廊庙之上，以诛其事。敌人开阖，必亟入之，先其所爱，微与之期，践墨随敌，以决战事。是故始如处女，敌人开户；后如脱兔，敌不及拒。",
    "sentences": [
      {
        "id": "jiu-di-1",
        "chapterId": "jiu-di",
        "order": 1,
        "original": "用兵之法，有散地，有轻地，有争地，有交地，有衢地，有重地，有泛地，有围地，有死地。",
        "words": [
          {
            "word": "散地",
            "explanation": "人心易散的本土处境。",
            "modernMapping": "低承诺场景"
          },
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
          },
          {
            "word": "争地",
            "explanation": "双方都想夺取的要点。",
            "modernMapping": "关键资源"
          },
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
          }
        ],
        "translation": "可以理解为：用兵的基本方制度，有散地利，有轻地利，有争地利，有交地利，有衢地利，有重地利，有泛地利，有围地利，有死地利。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-2",
        "chapterId": "jiu-di",
        "order": 2,
        "original": "诸侯自战其地者，为散地；入人之地不深者，为轻地；我得亦利，彼得亦利者，为争地；我可以往，彼可以来者，为交地；诸侯之地三属，先至而得天下众者，为衢地；入人之地深，背城邑多者，为重地；山林、险阻、沮泽，凡难行之道者，为泛地；所由入者隘，所从归者迂，彼寡可以击吾之众者，为围地；疾战则存，不疾战则亡者，为死地。",
        "words": [
          {
            "word": "散地",
            "explanation": "人心易散的本土处境。",
            "modernMapping": "低承诺场景"
          },
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
          },
          {
            "word": "争地",
            "explanation": "双方都想夺取的要点。",
            "modernMapping": "关键资源"
          },
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
          }
        ],
        "translation": "白话说就是：诸侯自作战其地利，为散地利；入人之地利不深，为轻地利；我得亦利益，对方得亦利益，为争地利；我可以往，对方可以来，为交地利；诸侯之地利三属，先至而得时机下兵众，为衢地利；入人之地利深，背城邑多，为重地利；山林、险阻、沮泽，凡是难行之共同目标，为泛地利；所由入隘，所从归迂，对方寡可以击我方之兵众，为围地利；疾作战则存，不疾作战则亡，为死地利。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "yi-yu-wei-zhi",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-3",
        "chapterId": "jiu-di",
        "order": 3,
        "original": "是故散地则无战，轻地则无止，争地则无攻，交地则无绝，衢地则合交，重地则掠，泛地则行，围地则谋，死地则战。",
        "words": [
          {
            "word": "散地",
            "explanation": "人心易散的本土处境。",
            "modernMapping": "低承诺场景"
          },
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
          },
          {
            "word": "争地",
            "explanation": "双方都想夺取的要点。",
            "modernMapping": "关键资源"
          },
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
          }
        ],
        "translation": "换成今天的话：是所以散地利则无作战，轻地利则无止，争地利则无进攻，交地利则无绝，衢地利则合交，重地利则掠，泛地利则行，围地利则谋，死地利则作战。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-4",
        "chapterId": "jiu-di",
        "order": 4,
        "original": "古之善用兵者，能使敌人前后不相及，众寡不相恃，贵贱不相救，上下不相收，卒离而不集，兵合而不齐。",
        "words": [
          {
            "word": "古之善用",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "兵者",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "能使敌人",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这句在说：古之善用军队事行动，能使对手人前后不相及，兵众寡不相恃，贵贱不相救，上下不相收，士卒离而不集，兵合而不齐。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-5",
        "chapterId": "jiu-di",
        "order": 5,
        "original": "合于利而动，不合于利而止。",
        "words": [
          {
            "word": "合于利而",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不合于利",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "而止",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "意思是：合于利益而动，不合于利益而止。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-6",
        "chapterId": "jiu-di",
        "order": 6,
        "original": "敢问敌众而整将来，待之若何曰：先夺其所爱则听矣。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "敢问敌众",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "而整将来",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：敢问对手兵众而整将领来，待之若何曰：先夺其所爱则听了。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-7",
        "chapterId": "jiu-di",
        "order": 7,
        "original": "兵之情主速，乘人之不及。",
        "words": [
          {
            "word": "兵之情主",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "乘人之不",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "白话说就是：兵之情君主速，乘人之不及。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-8",
        "chapterId": "jiu-di",
        "order": 8,
        "original": "由不虞之道，攻其所不戒也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "由不虞之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "攻其所不",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "换成今天的话：由不虞之共同目标，进攻其所不戒。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-9",
        "chapterId": "jiu-di",
        "order": 9,
        "original": "凡为客之道，深入则专。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "凡为客之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "深入则专",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这句在说：凡是为客之共同目标，深入则专。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-10",
        "chapterId": "jiu-di",
        "order": 10,
        "original": "主人不克，掠于饶野，三军足食。",
        "words": [
          {
            "word": "主人不克",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "掠于饶野",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "三军足食",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "意思是：君主人不克，掠于饶野，三军队足粮食。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-11",
        "chapterId": "jiu-di",
        "order": 11,
        "original": "谨养而勿劳，并气积力，运兵计谋，为不可测。",
        "words": [
          {
            "word": "谨养而勿",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "并气积力",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "运兵计谋",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：谨养而勿劳，并气积力，运兵计算和比较谋，为不可测。",
        "modernApplication": "做产品、投资或组织变革前，先列出可验证的有利条件和不利条件，用证据数量决定是否推进。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-12",
        "chapterId": "jiu-di",
        "order": 12,
        "original": "投之无所往，死且不北。",
        "words": [
          {
            "word": "投之无所",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "死且不北",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "白话说就是：投之无所往，死且不北。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-13",
        "chapterId": "jiu-di",
        "order": 13,
        "original": "死焉不得，士人尽力。",
        "words": [
          {
            "word": "死焉不得",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "士人尽力",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "换成今天的话：死焉不得，士人尽力。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-14",
        "chapterId": "jiu-di",
        "order": 14,
        "original": "兵士甚陷则不惧，无所往则固，深入则拘，不得已则斗。",
        "words": [
          {
            "word": "兵士甚陷",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "则不惧",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "无所往则",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这句在说：兵士甚陷则不惧，无所往则固，深入则拘，不得已则斗。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-15",
        "chapterId": "jiu-di",
        "order": 15,
        "original": "是故其兵不修而戒，不求而得，不约而亲，不令而信，禁祥去疑，至死无所之。",
        "words": [
          {
            "word": "是故其兵",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不修而戒",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不求而得",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "意思是：是所以其兵不修而戒，不求而得，不约而亲，不令而信，禁祥去疑，至死无所之。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-16",
        "chapterId": "jiu-di",
        "order": 16,
        "original": "吾士无余财，非恶货也；无余命，非恶寿也。",
        "words": [
          {
            "word": "吾士无余",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "非恶货也",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "无余命",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：我方士无余财，非恶货；无余命，非恶寿。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-17",
        "chapterId": "jiu-di",
        "order": 17,
        "original": "令发之日，士卒坐者涕沾襟，偃卧者涕交颐，投之无所往，诸、刿之勇也。",
        "words": [
          {
            "word": "令发之日",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "士卒坐者",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "涕沾襟",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "白话说就是：令发之日，士士卒坐涕沾襟，偃卧涕交颐，投之无所往，诸、刿之勇。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-18",
        "chapterId": "jiu-di",
        "order": 18,
        "original": "故善用兵者，譬如率然。",
        "words": [
          {
            "word": "故善用兵",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "譬如率然",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "换成今天的话：所以善用军队事行动，譬如率然。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t29",
          "t06"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-19",
        "chapterId": "jiu-di",
        "order": 19,
        "original": "率然者，常山之蛇也。",
        "words": [
          {
            "word": "率然者",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "常山之蛇",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这句在说：率然，常山之蛇。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-20",
        "chapterId": "jiu-di",
        "order": 20,
        "original": "击其首则尾至，击其尾则首至，击其中则首尾俱至。",
        "words": [
          {
            "word": "击其首则",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "尾至",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "击其尾则",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "意思是：击其首则尾至，击其尾则首至，击其中则首尾俱至。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t01",
          "t08"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-21",
        "chapterId": "jiu-di",
        "order": 21,
        "original": "敢问兵可使如率然乎？",
        "words": [
          {
            "word": "敢问兵可",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "使如率然",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：敢问兵可使如率然乎？",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t02",
          "t09"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-22",
        "chapterId": "jiu-di",
        "order": 22,
        "original": "曰可。",
        "words": [
          {
            "word": "曰可",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "白话说就是：曰可。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-23",
        "chapterId": "jiu-di",
        "order": 23,
        "original": "夫吴人与越人相恶也，当其同舟而济而遇风，其相救也如左右手。",
        "words": [
          {
            "word": "夫吴人与",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "越人相恶",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "当其同舟",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "换成今天的话：大凡是吴人与越人相恶，当其同舟而济而遇风，其相救如左右手。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-24",
        "chapterId": "jiu-di",
        "order": 24,
        "original": "是故方马埋轮，未足恃也；齐勇如一，政之道也；刚柔皆得，地之理也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "这句在说：是所以方马埋轮，未足恃；齐勇如一，政之共同目标；刚柔皆得，地利之理。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-25",
        "chapterId": "jiu-di",
        "order": 25,
        "original": "故善用兵者，携手若使一人，不得已也。",
        "words": [
          {
            "word": "故善用兵",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "携手若使",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "一人",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "意思是：所以善用军队事行动，携手若使一人，不得已。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-26",
        "chapterId": "jiu-di",
        "order": 26,
        "original": "将军之事，静以幽，正以治，能愚士卒之耳目，使之无知；易其事，革其谋，使人无识；易其居，迂其途，使民不得虑。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将军之事",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "静以幽",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：将领军队之事，静以幽，正兵以治，能愚士士卒之耳目，使之无知；易其事，革其谋，使人无识；易其居，迂其途，使民众不得虑。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zheng-qi",
          "yi-yu-wei-zhi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-27",
        "chapterId": "jiu-di",
        "order": 27,
        "original": "帅与之期，如登高而去其梯；帅与之深入诸侯之地，而发其机。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "帅与之期",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "如登高而",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "白话说就是：帅与之期，如登高而去其梯；帅与之深入诸侯之地利，而发其机。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-28",
        "chapterId": "jiu-di",
        "order": 28,
        "original": "若驱群羊，驱而往，驱而来，莫知所之。",
        "words": [
          {
            "word": "若驱群羊",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "驱而往",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "驱而来",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "换成今天的话：若驱群羊，驱而往，驱而来，没有谁知所之。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-29",
        "chapterId": "jiu-di",
        "order": 29,
        "original": "聚三军之众，投之于险，此谓将军之事也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "这句在说：聚三军队之兵众，投之于险，此谓将领军队之事。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-30",
        "chapterId": "jiu-di",
        "order": 30,
        "original": "九地之变，屈伸之力，人情之理，不可不察也。",
        "words": [
          {
            "word": "不可不察",
            "explanation": "不能不慎重考察，强调重大行动前必须先判断利害。",
            "modernMapping": "决策审查"
          },
          {
            "word": "九地",
            "explanation": "九种作战处境。",
            "modernMapping": "处境分类"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "意思是：九地利之变，屈伸之力，人情之理，必须慎重考察。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-31",
        "chapterId": "jiu-di",
        "order": 31,
        "original": "凡为客之道，深则专，浅则散。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "凡为客之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "深则专",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：凡是为客之共同目标，深则专，浅则散。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t12",
          "t19"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-32",
        "chapterId": "jiu-di",
        "order": 32,
        "original": "去国越境而师者，绝地也；四彻者，衢地也；入深者，重地也；入浅者，轻地也；背固前隘者，围地也；无所往者，死地也。",
        "words": [
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
          },
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
          },
          {
            "word": "重地",
            "explanation": "深入敌境、资源依赖增强的地区。",
            "modernMapping": "深度投入"
          },
          {
            "word": "围地",
            "explanation": "进出受限的危险处境。",
            "modernMapping": "受限局面"
          }
        ],
        "translation": "白话说就是：去国家越境而军队，绝地利；四彻，衢地利；入深，重地利；入浅，轻地利；背固前隘，围地利；无所往，死地利。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-33",
        "chapterId": "jiu-di",
        "order": 33,
        "original": "是故散地吾将一其志，轻地吾将使之属，争地吾将趋其后，交地吾将谨其守，交地吾将固其结，衢地吾将谨其恃，重地吾将继其食，泛地吾将进其途，围地吾将塞其阙，死地吾将示之以不活。",
        "words": [
          {
            "word": "散地",
            "explanation": "人心易散的本土处境。",
            "modernMapping": "低承诺场景"
          },
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
          },
          {
            "word": "争地",
            "explanation": "双方都想夺取的要点。",
            "modernMapping": "关键资源"
          },
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
          }
        ],
        "translation": "换成今天的话：是所以散地利我方将领一其志，轻地利我方将领使之属，争地利我方将领趋其后，交地利我方将领谨其防守，交地利我方将领固其结，衢地利我方将领谨其恃，重地利我方将领继其粮食，泛地利我方将领进其途，围地利我方将领塞其阙，死地利我方将领示之以不活。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-34",
        "chapterId": "jiu-di",
        "order": 34,
        "original": "故兵之情：围则御，不得已则斗，过则从。",
        "words": [
          {
            "word": "故兵之情",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "围则御",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不得已则",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这句在说：所以兵之情：围则御，不得已则斗，过则从。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-35",
        "chapterId": "jiu-di",
        "order": 35,
        "original": "是故不知诸侯之谋者，不能预交；不知山林、险阻、沮泽之形者，不能行军；不用乡导，不能得地利。",
        "words": [
          {
            "word": "行军",
            "explanation": "行军驻扎和观察敌情的方法。",
            "modernMapping": "现场判断"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "意思是：是所以不知诸侯之谋，不能预交；不知山林、险阻、沮泽之形势能，不能行军队；不用乡导，不能得地利利益。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-36",
        "chapterId": "jiu-di",
        "order": 36,
        "original": "四五者，一不知，非霸王之兵也。",
        "words": [
          {
            "word": "四五者",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "一不知",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "非霸王之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：四五，一不知，非霸王之兵。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-37",
        "chapterId": "jiu-di",
        "order": 37,
        "original": "夫霸王之兵，伐大国，则其众不得聚；威加于敌，则其交不得合。",
        "words": [
          {
            "word": "夫霸王之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "伐大国",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "则其众不",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "白话说就是：大凡是霸王之兵，伐大国家，则其兵众不得聚；威加于对手，则其交不得合。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-38",
        "chapterId": "jiu-di",
        "order": 38,
        "original": "是故不争天下之交，不养天下之权，信己之私，威加于敌，则其城可拔，其国可隳。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "是故不争",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "天下之交",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "换成今天的话：是所以不争时机下之交，不养时机下之权，信己之私，威加于对手，则其城可拔，其国家可隳。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-39",
        "chapterId": "jiu-di",
        "order": 39,
        "original": "施无法之赏，悬无政之令。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "施无法之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "悬无政之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这句在说：施无制度之赏，悬无政之令。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-40",
        "chapterId": "jiu-di",
        "order": 40,
        "original": "犯三军之众，若使一人。",
        "words": [
          {
            "word": "犯三军之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "若使一人",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "意思是：犯三军队之兵众，若使一人。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-41",
        "chapterId": "jiu-di",
        "order": 41,
        "original": "犯之以事，勿告以言；犯之以害，勿告以利。",
        "words": [
          {
            "word": "犯之以事",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "勿告以言",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "犯之以害",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：犯之以事，勿告以言；犯之以风险，勿告以利益。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-42",
        "chapterId": "jiu-di",
        "order": 42,
        "original": "投之亡地然后存，陷之死地然后生。",
        "words": [
          {
            "word": "死地",
            "explanation": "不战则亡的处境。",
            "modernMapping": "背水节点"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "白话说就是：投之亡地利然后存，陷之死地利然后生。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-43",
        "chapterId": "jiu-di",
        "order": 43,
        "original": "夫众陷于害，然后能为胜败。",
        "words": [
          {
            "word": "夫众陷于",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "然后能为",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "胜败",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "换成今天的话：大凡是兵众陷于风险，然后能为取胜失败。",
        "modernApplication": "复盘失败时不要只怪外部环境，要检查资源比例、管理强弱、指挥清晰度和执行队形。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-44",
        "chapterId": "jiu-di",
        "order": 44,
        "original": "故为兵之事，在顺详敌之意，并敌一向，千里杀将，是谓巧能成事。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故为兵之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "在顺详敌",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这句在说：所以为兵之事，在顺详对手之意，并对手一向，千里杀将领，是谓巧能成事。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-45",
        "chapterId": "jiu-di",
        "order": 45,
        "original": "是故政举之日，夷关折符，无通其使，厉于廊庙之上，以诛其事。",
        "words": [
          {
            "word": "通",
            "explanation": "双方都可往来的地形。",
            "modernMapping": "开放市场"
          },
          {
            "word": "是故政举",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "之日",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "意思是：是所以政举之日，夷关折符，无通其使，厉于廊庙之上，以诛其事。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-46",
        "chapterId": "jiu-di",
        "order": 46,
        "original": "敌人开阖，必亟入之，先其所爱，微与之期，践墨随敌，以决战事。",
        "words": [
          {
            "word": "敌人开阖",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "必亟入之",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "先其所爱",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "可以理解为：对手人开阖，必亟入之，先其所爱，微与之期，践墨随对手，以决作战事。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-47",
        "chapterId": "jiu-di",
        "order": 47,
        "original": "是故始如处女，敌人开户；后如脱兔，敌不及拒。",
        "words": [
          {
            "word": "是故始如",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "处女",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          },
          {
            "word": "敌人开户",
            "explanation": "本句实际出现的关键表达，需要放回“处境管理”语境中理解。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "白话说就是：是所以始如处女，对手人开户；后如脱兔，对手不及拒。",
        "modernApplication": "用于处境管理时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      }
    ],
    "coreSummary": "九地篇的核心不是记住名句，而是形成“处境管理”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于处境管理的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "shi-neng",
      "bi-shi-ji-xu"
    ],
    "relatedCaseIds": [
      "brand-position",
      "system-refactor"
    ],
    "relatedQuoteIds": [
      "q11"
    ]
  },
  {
    "id": "huo-gong",
    "order": 12,
    "title": "火攻篇",
    "slug": "huo-gong",
    "theme": "风险与时机",
    "summary": "借助特殊手段必须控制后果。",
    "modernMeaning": "火攻篇对应现代能力：风险与时机。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "风险与时机",
      "战略",
      "判断"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "列出火攻类型",
      "强调条件准备",
      "强调时机配合",
      "警惕情绪化行动"
    ],
    "fullOriginal": "凡火攻有五：一曰火人，二曰火积，三曰火辎，四曰火库，五曰火队。\n\n行火必有因，因必素具。发火有时，起火有日。时者，天之燥也。日者，月在箕、壁、翼、轸也。凡此四宿者，风起之日也。凡火攻，必因五火之变而应之：火发于内，则早应之于外；火发而其兵静者，待而勿攻，极其火力，可从而从之，不可从则上。火可发于外，无待于内，以时发之，火发上风，无攻下风，昼风久，夜风止。凡军必知五火之变，以数守之。\n\n故以火佐攻者明，以水佐攻者强。水可以绝，不可以夺。\n\n夫战胜攻取而不惰其功者凶，命曰“费留”。故曰：明主虑之，良将惰之，非利不动，非得不用，非危不战。主不可以怒而兴师，将不可以愠而攻战。合于利而动，不合于利而上。怒可以复喜，愠可以复说，亡国不可以复存，死者不可以复生。故明主慎之，良将警之。此安国全军之道也。",
    "sentences": [
      {
        "id": "huo-gong-1",
        "chapterId": "huo-gong",
        "order": 1,
        "original": "凡火攻有五：一曰火人，二曰火积，三曰火辎，四曰火库，五曰火队。",
        "words": [
          {
            "word": "火攻",
            "explanation": "以火作为辅助攻击手段。",
            "modernMapping": "高风险手段"
          },
          {
            "word": "凡火攻有",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "一曰火人",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "火攻有五类：烧人员、烧积储、烧辎重、烧仓库、烧队伍。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t13",
          "t20"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-2",
        "chapterId": "huo-gong",
        "order": 2,
        "original": "行火必有因，因必素具。",
        "words": [
          {
            "word": "行火必有",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "因必素具",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "换成今天的话：行火必有因，因必素具。",
        "modernApplication": "用于风险与时机时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-3",
        "chapterId": "huo-gong",
        "order": 3,
        "original": "发火有时，起火有日。",
        "words": [
          {
            "word": "发火有时",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "起火有日",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "这句在说：发火有时，起火有日。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-4",
        "chapterId": "huo-gong",
        "order": 4,
        "original": "时者，天之燥也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "时者",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "天之燥也",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "意思是：时，时机之燥。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-5",
        "chapterId": "huo-gong",
        "order": 5,
        "original": "日者，月在箕、壁、翼、轸也。",
        "words": [
          {
            "word": "日者",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "月在箕",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "轸也",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "可以理解为：日，月在箕、壁、翼、轸。",
        "modernApplication": "用于风险与时机时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-6",
        "chapterId": "huo-gong",
        "order": 6,
        "original": "凡此四宿者，风起之日也。",
        "words": [
          {
            "word": "凡此四宿",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "风起之日",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "白话说就是：凡是此四宿，风起之日。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-7",
        "chapterId": "huo-gong",
        "order": 7,
        "original": "凡火攻，必因五火之变而应之：火发于内，则早应之于外；火发而其兵静者，待而勿攻，极其火力，可从而从之，不可从则上。",
        "words": [
          {
            "word": "火攻",
            "explanation": "以火作为辅助攻击手段。",
            "modernMapping": "高风险手段"
          },
          {
            "word": "凡火攻",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "必因五火",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "换成今天的话：凡是火进攻，必因五火之变而应之：火发于内，则早应之于外；火发而其兵静，待而勿进攻，极其火力，可从而从之，不可从则上。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "huo-gong-8",
        "chapterId": "huo-gong",
        "order": 8,
        "original": "火可发于外，无待于内，以时发之，火发上风，无攻下风，昼风久，夜风止。",
        "words": [
          {
            "word": "火可发于",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "无待于内",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "以时发之",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "这句在说：火可发于外，无待于内，以时发之，火发上风，无进攻下风，昼风久，夜风止。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-9",
        "chapterId": "huo-gong",
        "order": 9,
        "original": "凡军必知五火之变，以数守之。",
        "words": [
          {
            "word": "凡军必知",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "五火之变",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "以数守之",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "意思是：凡是军队必知五火之变，以数防守之。",
        "modernApplication": "用于风险与时机时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-10",
        "chapterId": "huo-gong",
        "order": 10,
        "original": "故以火佐攻者明，以水佐攻者强。",
        "words": [
          {
            "word": "故以火佐",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "攻者明",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "以水佐攻",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "可以理解为：所以以火佐进攻明，以水佐进攻强。",
        "modernApplication": "用于风险与时机时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zhi-tian-zhi-di",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-11",
        "chapterId": "huo-gong",
        "order": 11,
        "original": "水可以绝，不可以夺。",
        "words": [
          {
            "word": "水可以绝",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "不可以夺",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "白话说就是：水可以绝，不可以夺。",
        "modernApplication": "用于风险与时机时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-tian-zhi-di",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-12",
        "chapterId": "huo-gong",
        "order": 12,
        "original": "夫战胜攻取而不惰其功者凶，命曰“费留”。",
        "words": [
          {
            "word": "夫战胜攻",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "取而不惰",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "其功者凶",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "换成今天的话：大凡是作战取胜进攻取而不惰其功凶，命曰“费留”。",
        "modernApplication": "用于风险与时机时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "huo-gong-13",
        "chapterId": "huo-gong",
        "order": 13,
        "original": "故曰：明主虑之，良将惰之，非利不动，非得不用，非危不战。",
        "words": [
          {
            "word": "非利不动",
            "explanation": "没有明确收益就不行动。",
            "modernMapping": "行动门槛"
          },
          {
            "word": "非危不战",
            "explanation": "不到真正危急不发动战争。",
            "modernMapping": "冲突克制"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "这句在说：所以曰：明君主虑之，良将领惰之，非利益不动，非得不用，非危不作战。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "huo-gong-14",
        "chapterId": "huo-gong",
        "order": 14,
        "original": "主不可以怒而兴师，将不可以愠而攻战。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "主不可以",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "怒而兴师",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "君主不能因为愤怒而兴兵，将领不能因为怨怒而作战。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-15",
        "chapterId": "huo-gong",
        "order": 15,
        "original": "合于利而动，不合于利而上。",
        "words": [
          {
            "word": "合于利而",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "不合于利",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "而上",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "可以理解为：合于利益而动，不合于利益而上。",
        "modernApplication": "用于风险与时机时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "huo-gong-16",
        "chapterId": "huo-gong",
        "order": 16,
        "original": "怒可以复喜，愠可以复说，亡国不可以复存，死者不可以复生。",
        "words": [
          {
            "word": "怒可以复",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "愠可以复",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "亡国不可",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "白话说就是：怒可以复喜，愠可以复说，亡国家不可以复存，死不可以复生。",
        "modernApplication": "危机决策中先问是否有明确收益、能否达成目标、是否真正危险，避免被愤怒或焦虑驱动。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-17",
        "chapterId": "huo-gong",
        "order": 17,
        "original": "故明主慎之，良将警之。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故明主慎",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "良将警之",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "换成今天的话：所以明君主慎之，良将领警之。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t29",
          "t06"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-18",
        "chapterId": "huo-gong",
        "order": 18,
        "original": "此安国全军之道也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "此安国全",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "军之道也",
            "explanation": "本句实际出现的关键表达，需要放回“风险与时机”语境中理解。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "这句在说：此安国家全军队之共同目标。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-zhan-er-qu-ren",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "normal"
      }
    ],
    "coreSummary": "火攻篇的核心不是记住名句，而是形成“风险与时机”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于风险与时机的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "zhi-ren-bu-zhi-yu-ren"
    ],
    "relatedCaseIds": [
      "project-kickoff",
      "tech-debt"
    ],
    "relatedQuoteIds": [
      "q12"
    ]
  },
  {
    "id": "yong-jian",
    "order": 13,
    "title": "用间篇",
    "slug": "yong-jian",
    "theme": "信息优势",
    "summary": "用信息差减少误判、提高胜算。",
    "modernMeaning": "用间篇对应现代能力：信息优势。它要求用户把古文转成判断流程，先明确局势，再判断资源、成本、风险、时机与执行路径。",
    "keywords": [
      "用间"
    ],
    "applicableScenes": [
      "项目立项",
      "竞争分析",
      "团队管理",
      "创业决策",
      "技术项目",
      "个人选择"
    ],
    "versionInfo": {
      "sourceName": "《孙子兵法》通行本学习版",
      "edition": "通行本",
      "completeness": "完整",
      "proofreadingStatus": "初校",
      "variantNotes": [],
      "note": "已按《孙子兵法.txt》补齐通行本完整原文；逐句译注为初校内容，建议结合原文继续复校。"
    },
    "structure": [
      "信息决定成本与胜算",
      "反对迷信和空想推测",
      "提出五间体系",
      "强调保密与激励"
    ],
    "fullOriginal": "凡兴师十万，出征千里，百姓之费，公家之奉，日费千金，内外骚动，怠于道路，不得操事者，七十万家。相守数年，以争一日之胜，而爱爵禄百金，不知敌之情者，不仁之至也，非民之将也，非主之佐也，非胜之主也。故明君贤将所以动而胜人，成功出于众者，先知也。先知者，不可取于鬼神，不可象于事，不可验于度，必取于人，知敌之情者也。\n\n故用间有五：有因间，有内间，有反间，有死间，有生间。五间俱起，莫知其道，是谓神纪，人君之宝也。乡间者，因其乡人而用之；内间者，因其官人而用之；反间者，因其敌间而用之；死间者，为诳事于外，令吾闻知之而传于敌间也；生间者，反报也。故三军之事，莫亲于间，赏莫厚于间，事莫密于间，非圣贤不能用间，非仁义不能使间，非微妙不能得间之实。微哉微哉！无所不用间也。间事未发而先闻者，间与所告者兼死。凡军之所欲击，城之所欲攻，人之所欲杀，必先知其守将、左右、谒者、门者、舍人之姓名，令吾间必索知之。敌间之来间我者，因而利之，导而舍之，故反间可得而用也；因是而知之，故乡间、内间可得而使也；因是而知之，故死间为诳事，可使告敌；因是而知之，故生间可使如期。五间之事，主必知之，知之必在于反间，故反间不可不厚也。\n\n昔殷之兴也，伊挚在夏；周之兴也，吕牙在殷。故明君贤将，能以上智为间者，必成大功。此兵之要，三军之所恃而动也。",
    "sentences": [
      {
        "id": "yong-jian-1",
        "chapterId": "yong-jian",
        "order": 1,
        "original": "凡兴师十万，出征千里，百姓之费，公家之奉，日费千金，内外骚动，怠于道路，不得操事者，七十万家。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "凡兴师十",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "出征千里",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "换成今天的话：凡是兴军队十万，出征千里，百姓之费，公家之奉，日费千金，内外骚动，怠于共同目标路，不得操事，七十万家。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bing-gui-sheng",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-2",
        "chapterId": "yong-jian",
        "order": 2,
        "original": "相守数年，以争一日之胜，而爱爵禄百金，不知敌之情者，不仁之至也，非民之将也，非主之佐也，非胜之主也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "相守数年",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "以争一日",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "这句在说：相防守数年，以争一日之取胜，而爱爵禄百金，不知对手之情，不仁之至，非民众之将领，非君主之佐，非取胜之君主。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-3",
        "chapterId": "yong-jian",
        "order": 3,
        "original": "故明君贤将所以动而胜人，成功出于众者，先知也。",
        "words": [
          {
            "word": "先知",
            "explanation": "行动前先掌握对方真实情况。",
            "modernMapping": "前置调研"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "明君贤将之所以一行动就能胜过别人、功业超出众人，是因为先掌握真实情况。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "yong-jian-4",
        "chapterId": "yong-jian",
        "order": 4,
        "original": "先知者，不可取于鬼神，不可象于事，不可验于度，必取于人，知敌之情者也。",
        "words": [
          {
            "word": "先知",
            "explanation": "行动前先掌握对方真实情况。",
            "modernMapping": "前置调研"
          },
          {
            "word": "先知者",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "不可取于",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "预先知道敌情，不能靠鬼神、类比或空泛推算，必须依靠真正了解敌情的人。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t17",
          "t24"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "yong-jian-5",
        "chapterId": "yong-jian",
        "order": 5,
        "original": "故用间有五：有因间，有内间，有反间，有死间，有生间。",
        "words": [
          {
            "word": "用间",
            "explanation": "使用间谍与情报网络。",
            "modernMapping": "情报体系"
          },
          {
            "word": "反间",
            "explanation": "利用对方间谍反向取得信息或传递信息。",
            "modernMapping": "反向情报"
          },
          {
            "word": "生间",
            "explanation": "能够返回报告的间谍。",
            "modernMapping": "一手反馈"
          }
        ],
        "translation": "白话说就是：所以用情报人员有五：有因情报人员，有内情报人员，有反情报人员，有死情报人员，有生情报人员。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t18",
          "t25"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-6",
        "chapterId": "yong-jian",
        "order": 6,
        "original": "五间俱起，莫知其道，是谓神纪，人君之宝也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "五间俱起",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "莫知其道",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "换成今天的话：五情报人员俱起，没有谁知其共同目标，是谓神纪，人君之宝。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-7",
        "chapterId": "yong-jian",
        "order": 7,
        "original": "乡间者，因其乡人而用之；内间者，因其官人而用之；反间者，因其敌间而用之；死间者，为诳事于外，令吾闻知之而传于敌间也；生间者，反报也。",
        "words": [
          {
            "word": "反间",
            "explanation": "利用对方间谍反向取得信息或传递信息。",
            "modernMapping": "反向情报"
          },
          {
            "word": "生间",
            "explanation": "能够返回报告的间谍。",
            "modernMapping": "一手反馈"
          }
        ],
        "translation": "这句在说：乡情报人员，因其乡人而用之；内情报人员，因其官人而用之；反情报人员，因其对手情报人员而用之；死情报人员，为诳事于外，令我方闻知之而传于对手情报人员；生情报人员，反报。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-8",
        "chapterId": "yong-jian",
        "order": 8,
        "original": "故三军之事，莫亲于间，赏莫厚于间，事莫密于间，非圣贤不能用间，非仁义不能使间，非微妙不能得间之实。",
        "words": [
          {
            "word": "用间",
            "explanation": "使用间谍与情报网络。",
            "modernMapping": "情报体系"
          },
          {
            "word": "故三军之",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "莫亲于间",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "意思是：所以三军队之事，没有谁亲于情报人员，赏没有谁厚于情报人员，事没有谁密于情报人员，非圣贤不能用情报人员，非仁义不能使情报人员，非微妙不能得情报人员之坚实处。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "bi-shi-ji-xu",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-9",
        "chapterId": "yong-jian",
        "order": 9,
        "original": "微哉微哉！",
        "words": [
          {
            "word": "微哉微哉",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "可以理解为：微哉微哉！",
        "modernApplication": "用于信息优势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t22",
          "t29"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "yong-jian-10",
        "chapterId": "yong-jian",
        "order": 10,
        "original": "无所不用间也。",
        "words": [
          {
            "word": "用间",
            "explanation": "使用间谍与情报网络。",
            "modernMapping": "情报体系"
          },
          {
            "word": "无所不用",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "间也",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "白话说就是：无所不用情报人员。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t23",
          "t30"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-11",
        "chapterId": "yong-jian",
        "order": 11,
        "original": "间事未发而先闻者，间与所告者兼死。",
        "words": [
          {
            "word": "间事未发",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "而先闻者",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "间与所告",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "换成今天的话：情报人员事未发而先闻，情报人员与所告兼死。",
        "modernApplication": "用于信息优势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-12",
        "chapterId": "yong-jian",
        "order": 12,
        "original": "凡军之所欲击，城之所欲攻，人之所欲杀，必先知其守将、左右、谒者、门者、舍人之姓名，令吾间必索知之。",
        "words": [
          {
            "word": "先知",
            "explanation": "行动前先掌握对方真实情况。",
            "modernMapping": "前置调研"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "这句在说：凡是军队之所欲击，城之所欲进攻，人之所欲杀，必先知其防守将领、左右、谒、门、舍人之姓名，令我方情报人员必索知之。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-ji-zhi-bi",
          "bu-ke-sheng-zai-ji",
          "yong-jian"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t25",
          "t02"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "yong-jian-13",
        "chapterId": "yong-jian",
        "order": 13,
        "original": "敌间之来间我者，因而利之，导而舍之，故反间可得而用也；因是而知之，故乡间、内间可得而使也；因是而知之，故死间为诳事，可使告敌；因是而知之，故生间可使如期。",
        "words": [
          {
            "word": "反间",
            "explanation": "利用对方间谍反向取得信息或传递信息。",
            "modernMapping": "反向情报"
          },
          {
            "word": "生间",
            "explanation": "能够返回报告的间谍。",
            "modernMapping": "一手反馈"
          }
        ],
        "translation": "意思是：对手情报人员之来情报人员我，因而利益之，导而舍之，所以反情报人员可得而用；因是而知之，所以乡情报人员、内情报人员可得而使；因是而知之，所以死情报人员为诳事，可使告对手；因是而知之，所以生情报人员可使如期。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "li-hai-bing-guan",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t26",
          "t03"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-14",
        "chapterId": "yong-jian",
        "order": 14,
        "original": "五间之事，主必知之，知之必在于反间，故反间不可不厚也。",
        "words": [
          {
            "word": "反间",
            "explanation": "利用对方间谍反向取得信息或传递信息。",
            "modernMapping": "反向情报"
          },
          {
            "word": "五间之事",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "主必知之",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "可以理解为：五情报人员之事，君主必知之，知之必在于反情报人员，所以反情报人员不可不厚。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t27",
          "t04"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-15",
        "chapterId": "yong-jian",
        "order": 15,
        "original": "昔殷之兴也，伊挚在夏；周之兴也，吕牙在殷。",
        "words": [
          {
            "word": "昔殷之兴",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "伊挚在夏",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "周之兴也",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "白话说就是：昔殷之兴，伊挚在夏；周之兴，吕牙在殷。",
        "modernApplication": "用于信息优势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "yong-jian-16",
        "chapterId": "yong-jian",
        "order": 16,
        "original": "故明君贤将，能以上智为间者，必成大功。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故明君贤",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "能以上智",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "换成今天的话：所以明君贤将领，能以上智为情报人员，必成大功。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-ji-zhi-bi",
          "yong-jian",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t29",
          "t06"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-17",
        "chapterId": "yong-jian",
        "order": 17,
        "original": "此兵之要，三军之所恃而动也。",
        "words": [
          {
            "word": "此兵之要",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "三军之所",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          },
          {
            "word": "恃而动也",
            "explanation": "本句实际出现的关键表达，需要放回“信息优势”语境中理解。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "这句在说：此兵之要，三军队之所恃而动。",
        "modernApplication": "用于信息优势时，可把本句转成一个检查问题：当前行动的目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "relatedConceptIds": [
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "normal"
      }
    ],
    "coreSummary": "用间篇的核心不是记住名句，而是形成“信息优势”的判断能力。学习时要区分原文、字词、白话翻译和现代应用，避免把概念口号当成行动方案。",
    "modernApplications": [
      "用于信息优势的项目复盘",
      "用于判断是否该继续投入资源",
      "用于识别对手强弱与己方边界",
      "用于把抽象原则转成行动前检查清单"
    ],
    "reflectionTemplate": [
      "这篇解决的核心问题是什么？",
      "我现实中遇到过类似局势吗？",
      "如果重来一次，我会先检查哪些条件？",
      "有哪些风险是我过去忽略的？"
    ],
    "relatedConceptIds": [
      "zhi-ren-bu-zhi-yu-ren",
      "gong-qi-suo-bi-jiu"
    ],
    "relatedCaseIds": [
      "team-alignment",
      "architecture-pilot"
    ],
    "relatedQuoteIds": [
      "q13"
    ]
  }
];

export const concepts: DeepConcept[] = [
  {
    "id": "dao-tian-di-jiang-fa",
    "name": "道天地将法",
    "slug": "dao-tian-di-jiang-fa",
    "oneLineExplanation": "行动前判断胜算的五个基本维度。",
    "sourceChapterIds": [
      "shi-ji"
    ],
    "originalSentences": [
      "兵者，国之大事，死生之地，存亡之道，不可不察也。"
    ],
    "ancientContext": "在《始计篇》中，道天地将法不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，道天地将法应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "道",
        "ancientMeaning": "上下同欲，目标一致。",
        "modernMapping": "组织共识、共同目标。",
        "example": "项目启动前确认业务、技术、管理层是否目标一致。"
      },
      {
        "name": "天",
        "ancientMeaning": "阴阳寒暑与时制。",
        "modernMapping": "外部周期、政策环境、时间窗口。",
        "example": "在行业窗口打开时推进，而不是逆周期硬冲。"
      },
      {
        "name": "地",
        "ancientMeaning": "远近险易、广狭死生。",
        "modernMapping": "市场位置、资源环境、渠道结构。",
        "example": "选择自己能触达、对手不易覆盖的细分场景。"
      },
      {
        "name": "将",
        "ancientMeaning": "智信仁勇严。",
        "modernMapping": "负责人判断力、可信度、组织力。",
        "example": "复杂项目必须有能拍板、能协调、能承担风险的人。"
      },
      {
        "name": "法",
        "ancientMeaning": "曲制、官道、主用。",
        "modernMapping": "流程、规则、激励和执行系统。",
        "example": "没有流程和责任边界，战略会停在口号。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把道天地将法当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "guan-du"
    ],
    "relatedTrainingIds": [
      "t01"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "qi-ji",
    "name": "七计",
    "slug": "qi-ji",
    "oneLineExplanation": "用七组问题比较敌我条件，而不是凭感觉判断。",
    "sourceChapterIds": [
      "shi-ji"
    ],
    "originalSentences": [
      "兵者，国之大事，死生之地，存亡之道，不可不察也。"
    ],
    "ancientContext": "在《始计篇》中，七计不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，七计应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "用七组问题比较敌我条件，而不是凭感觉判断。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把七计当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "chi-bi"
    ],
    "relatedTrainingIds": [
      "t02"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "miao-suan",
    "name": "庙算",
    "slug": "miao-suan",
    "oneLineExplanation": "在行动前完成推演、比较、风险估算。",
    "sourceChapterIds": [
      "shi-ji"
    ],
    "originalSentences": [
      "兵者，国之大事，死生之地，存亡之道，不可不察也。"
    ],
    "ancientContext": "在《始计篇》中，庙算不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，庙算应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "在行动前完成推演、比较、风险估算。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把庙算当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "fei-shui"
    ],
    "relatedTrainingIds": [
      "t03"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "bing-gui-sheng",
    "name": "兵贵胜不贵久",
    "slug": "bing-gui-sheng",
    "oneLineExplanation": "重视有效结果，警惕长期消耗。",
    "sourceChapterIds": [
      "zuo-zhan"
    ],
    "originalSentences": [
      "凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮。"
    ],
    "ancientContext": "在《作战篇》中，兵贵胜不贵久不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，兵贵胜不贵久应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "重视有效结果，警惕长期消耗。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把兵贵胜不贵久当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "chu-han"
    ],
    "relatedTrainingIds": [
      "t04"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "shang-bing-fa-mou",
    "name": "上兵伐谋",
    "slug": "shang-bing-fa-mou",
    "oneLineExplanation": "优先瓦解对方战略，而不是直接消耗。",
    "sourceChapterIds": [
      "mou-gong"
    ],
    "originalSentences": [
      "凡用兵之法，全国为上，破国次之；全军为上，破军次之。"
    ],
    "ancientContext": "在《谋攻篇》中，上兵伐谋不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，上兵伐谋应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "优先瓦解对方战略，而不是直接消耗。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把上兵伐谋当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "chang-ping"
    ],
    "relatedTrainingIds": [
      "t05"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "bu-zhan-er-qu-ren",
    "name": "不战而屈人之兵",
    "slug": "bu-zhan-er-qu-ren",
    "oneLineExplanation": "用结构和条件让对方失去继续对抗的必要。",
    "sourceChapterIds": [
      "mou-gong"
    ],
    "originalSentences": [
      "凡用兵之法，全国为上，破国次之；全军为上，破军次之。"
    ],
    "ancientContext": "在《谋攻篇》中，不战而屈人之兵不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，不战而屈人之兵应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "用结构和条件让对方失去继续对抗的必要。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把不战而屈人之兵当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "jing-xing"
    ],
    "relatedTrainingIds": [
      "t06"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "zhi-ji-zhi-bi",
    "name": "知己知彼",
    "slug": "zhi-ji-zhi-bi",
    "oneLineExplanation": "同时理解自己和对方，降低误判。",
    "sourceChapterIds": [
      "mou-gong"
    ],
    "originalSentences": [
      "凡用兵之法，全国为上，破国次之；全军为上，破军次之。"
    ],
    "ancientContext": "在《谋攻篇》中，知己知彼不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，知己知彼应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "同时理解自己和对方，降低误判。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把知己知彼当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "startup-giant"
    ],
    "relatedTrainingIds": [
      "t07"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "xian-sheng-hou-zhan",
    "name": "先胜后战",
    "slug": "xian-sheng-hou-zhan",
    "oneLineExplanation": "先建立赢的条件，再进入对抗。",
    "sourceChapterIds": [
      "jun-xing"
    ],
    "originalSentences": [
      "昔之善战者，先为不可胜，以待敌之可胜。"
    ],
    "ancientContext": "在《军形篇》中，先胜后战不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，先胜后战应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "先建立赢的条件，再进入对抗。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把先胜后战当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "price-war"
    ],
    "relatedTrainingIds": [
      "t08"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "bu-ke-sheng-zai-ji",
    "name": "不可胜在己",
    "slug": "bu-ke-sheng-zai-ji",
    "oneLineExplanation": "先控制自己能控制的失败风险。",
    "sourceChapterIds": [
      "jun-xing"
    ],
    "originalSentences": [
      "昔之善战者，先为不可胜，以待敌之可胜。"
    ],
    "ancientContext": "在《军形篇》中，不可胜在己不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，不可胜在己应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "先控制自己能控制的失败风险。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把不可胜在己当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "niche-product"
    ],
    "relatedTrainingIds": [
      "t09"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "zheng-qi",
    "name": "正合奇胜",
    "slug": "zheng-qi",
    "oneLineExplanation": "用常规力量稳定局面，用非常规突破制胜。",
    "sourceChapterIds": [
      "bing-shi"
    ],
    "originalSentences": [
      "凡治众如治寡，分数是也；斗众如斗寡，形名是也。"
    ],
    "ancientContext": "在《兵势篇》中，正合奇胜不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，正合奇胜应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "用常规力量稳定局面，用非常规突破制胜。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把正合奇胜当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "network-effect"
    ],
    "relatedTrainingIds": [
      "t10"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "shi-neng",
    "name": "势能",
    "slug": "shi-neng",
    "oneLineExplanation": "把力量放到有利结构中，让系统放大效果。",
    "sourceChapterIds": [
      "bing-shi"
    ],
    "originalSentences": [
      "凡治众如治寡，分数是也；斗众如斗寡，形名是也。"
    ],
    "ancientContext": "在《兵势篇》中，势能不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，势能应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "把力量放到有利结构中，让系统放大效果。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把势能当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "brand-position"
    ],
    "relatedTrainingIds": [
      "t11"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "bi-shi-ji-xu",
    "name": "避实击虚",
    "slug": "bi-shi-ji-xu",
    "oneLineExplanation": "避开对方优势，攻击其薄弱处。",
    "sourceChapterIds": [
      "xu-shi"
    ],
    "originalSentences": [
      "凡先处战地而待敌者佚，后处战地而趋战者劳。"
    ],
    "ancientContext": "在《虚实篇》中，避实击虚不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，避实击虚应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "避开对方优势，攻击其薄弱处。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把避实击虚当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "project-kickoff"
    ],
    "relatedTrainingIds": [
      "t12"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "zhi-ren-bu-zhi-yu-ren",
    "name": "致人而不致于人",
    "slug": "zhi-ren-bu-zhi-yu-ren",
    "oneLineExplanation": "掌握节奏，不被对方牵引。",
    "sourceChapterIds": [
      "xu-shi"
    ],
    "originalSentences": [
      "凡先处战地而待敌者佚，后处战地而趋战者劳。"
    ],
    "ancientContext": "在《虚实篇》中，致人而不致于人不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，致人而不致于人应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "掌握节奏，不被对方牵引。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把致人而不致于人当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "team-alignment"
    ],
    "relatedTrainingIds": [
      "t13"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "gong-qi-suo-bi-jiu",
    "name": "攻其所必救",
    "slug": "gong-qi-suo-bi-jiu",
    "oneLineExplanation": "攻击对方必须保护的关键节点。",
    "sourceChapterIds": [
      "xu-shi"
    ],
    "originalSentences": [
      "凡先处战地而待敌者佚，后处战地而趋战者劳。"
    ],
    "ancientContext": "在《虚实篇》中，攻其所必救不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，攻其所必救应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "攻击对方必须保护的关键节点。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把攻其所必救当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "resource-fight"
    ],
    "relatedTrainingIds": [
      "t14"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "yi-yu-wei-zhi",
    "name": "以迂为直",
    "slug": "yi-yu-wei-zhi",
    "oneLineExplanation": "用绕路获得更好的战略位置。",
    "sourceChapterIds": [
      "jun-zheng"
    ],
    "originalSentences": [
      "凡用兵之法，将受命于君，合军聚众，交和而舍，莫难于军争。"
    ],
    "ancientContext": "在《军争篇》中，以迂为直不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，以迂为直应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "用绕路获得更好的战略位置。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把以迂为直当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "real-decision-maker"
    ],
    "relatedTrainingIds": [
      "t15"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "li-hai-bing-guan",
    "name": "利害并观",
    "slug": "li-hai-bing-guan",
    "oneLineExplanation": "看见利益时同步计算风险。",
    "sourceChapterIds": [
      "jiu-bian"
    ],
    "originalSentences": [
      "凡用兵之法，将受命于君，合军聚众，圮地无舍，衢地交合。"
    ],
    "ancientContext": "在《九变篇》中，利害并观不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，利害并观应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "看见利益时同步计算风险。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把利害并观当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "avoid-internal-friction"
    ],
    "relatedTrainingIds": [
      "t16"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "jiang-you-wu-wei",
    "name": "将有五危",
    "slug": "jiang-you-wu-wei",
    "oneLineExplanation": "识别领导者性格偏差带来的战略风险。",
    "sourceChapterIds": [
      "jiu-bian"
    ],
    "originalSentences": [
      "凡用兵之法，将受命于君，合军聚众，圮地无舍，衢地交合。"
    ],
    "ancientContext": "在《九变篇》中，将有五危不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，将有五危应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "识别领导者性格偏差带来的战略风险。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把将有五危当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "system-refactor"
    ],
    "relatedTrainingIds": [
      "t17"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "zhi-tian-zhi-di",
    "name": "知天知地",
    "slug": "zhi-tian-zhi-di",
    "oneLineExplanation": "同时理解外部周期和具体环境。",
    "sourceChapterIds": [
      "di-xing"
    ],
    "originalSentences": [
      "地形有通者、有挂者、有支者、有隘者、有险者、有远者。"
    ],
    "ancientContext": "在《地形篇》中，知天知地不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，知天知地应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "同时理解外部周期和具体环境。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把知天知地当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "tech-debt"
    ],
    "relatedTrainingIds": [
      "t18"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "si-di-qiu-sheng",
    "name": "死地求生",
    "slug": "si-di-qiu-sheng",
    "oneLineExplanation": "在极端处境中压缩退路，但必须谨慎使用。",
    "sourceChapterIds": [
      "jiu-di"
    ],
    "originalSentences": [
      "用兵之法，有散地，有轻地，有争地，有交地，有衢地，有重地，有圮地，有围地，有死地。"
    ],
    "ancientContext": "在《九地篇》中，死地求生不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，死地求生应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "在极端处境中压缩退路，但必须谨慎使用。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把死地求生当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "architecture-pilot"
    ],
    "relatedTrainingIds": [
      "t19"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  },
  {
    "id": "yong-jian",
    "name": "用间",
    "slug": "yong-jian",
    "oneLineExplanation": "通过可靠信息源减少误判，而不是靠猜测决策。",
    "sourceChapterIds": [
      "yong-jian"
    ],
    "originalSentences": [
      "凡兴师十万，出征千里，百姓之费，公家之奉，日费千金。"
    ],
    "ancientContext": "在《用间篇》中，用间不是孤立口号，而是用来处理战争、组织、资源、地形、信息与时机之间关系的判断工具。古代语境里，错误判断会带来巨大人力和国家成本。",
    "modernMeaning": "现代使用时，用间应被转化为可执行检查清单：先明确目标，再识别资源、成本、风险、对手和时间窗口。",
    "dimensions": [
      {
        "name": "判断维度",
        "ancientMeaning": "通过可靠信息源减少误判，而不是靠猜测决策。",
        "modernMapping": "把兵法概念转成行动前检查项。",
        "example": "在项目、竞争、谈判或重构前先完成条件判断。"
      }
    ],
    "applicableScenes": [
      "项目立项",
      "竞争策略",
      "团队协作",
      "商业谈判",
      "技术重构"
    ],
    "unsuitableScenes": [
      "低成本快速试错的小决策",
      "信息极度不足且无法补充时",
      "已经进入紧急执行且无法停下评估时"
    ],
    "commonMisunderstandings": [
      "把用间当成漂亮口号，而不是检查工具。",
      "只看对手，不看自己资源。",
      "只看机会，不看成本和失败后果。"
    ],
    "correctUsage": [
      "先写出当前问题。",
      "列出可验证事实。",
      "判断哪些条件可控、哪些不可控。",
      "给出适用前提，而不是直接下结论。"
    ],
    "negativeCases": [
      "大型系统重构未评估依赖和业务窗口，直接全面推翻旧系统，导致长期消耗。"
    ],
    "relatedCaseIds": [
      "review-platform"
    ],
    "relatedTrainingIds": [
      "t20"
    ],
    "selfTestQuestions": [
      "这个概念解决的是什么问题？",
      "它在哪些场景下会被误用？",
      "如果应用到我现在的项目，第一步要检查什么？"
    ]
  }
];

export const cases: DeepCaseItem[] = [
  {
    "id": "guan-du",
    "title": "官渡之战：小势力如何攻击大势力的关键弱点？",
    "slug": "guan-du",
    "category": "history",
    "summary": "通过官渡之战：小势力如何攻击大势力的关键弱点？理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "建安五年（200 年）前后，袁绍与曹操在官渡长期对峙。袁绍兵力、粮草和声望占优，曹操粮草紧张，继续正面消耗并不划算。许攸离开袁绍后投奔曹操，带来乌巢粮草信息，使曹操看见了一个能撬动全局的薄弱点。",
    "actors": [
      {
        "name": "袁绍",
        "role": "兵力与资源占优的一方",
        "advantages": [
          "兵力较强",
          "资源与声望较高",
          "拥有较大动员能力"
        ],
        "disadvantages": [
          "内部意见复杂",
          "决策迟疑",
          "关键粮草节点暴露"
        ]
      },
      {
        "name": "曹操",
        "role": "资源劣势但执行果断的一方",
        "advantages": [
          "决策集中",
          "执行速度快",
          "能利用关键情报"
        ],
        "disadvantages": [
          "兵少",
          "粮少",
          "长期对峙压力大"
        ]
      },
      {
        "name": "许攸",
        "role": "提供关键信息的人",
        "advantages": [
          "了解袁军粮草布置"
        ],
        "disadvantages": [
          "投奔带来情报可信度风险"
        ]
      },
      {
        "name": "乌巢粮仓",
        "role": "袁军关键资源节点",
        "advantages": [
          "支撑前线长期作战"
        ],
        "disadvantages": [
          "一旦失守，正面兵力优势被削弱"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "袁绍",
        "manpower": "优势明显",
        "resource": "粮草储备更强但集中于关键节点",
        "morale": "声望高但内部不一",
        "information": "部分关键部署被许攸带出",
        "position": "正面压迫曹操"
      },
      {
        "side": "曹操",
        "manpower": "明显劣势",
        "resource": "粮草紧张",
        "morale": "压力大但指挥集中",
        "information": "获得乌巢线索后形成局部信息优势",
        "position": "正面对耗不利"
      }
    ],
    "constraints": [
      "曹操粮草紧张，无法无限期承受官渡正面对峙。",
      "袁绍总体资源强，但乌巢粮仓成为支撑前线的集中节点。",
      "许攸情报有价值，但投奔者信息也存在真实性和时效性风险。",
      "袭击乌巢需要快速决断；迟疑会让袁军调整守备。"
    ],
    "timeline": [
      {
        "time": "建安五年官渡相持",
        "event": "袁绍大军南下，与曹操在官渡形成长期对峙。",
        "strategicMeaning": "资源弱势方若继续正面相持，会被拖入对方更擅长的消耗战。"
      },
      {
        "time": "许攸来投",
        "event": "许攸离开袁绍阵营，向曹操提供乌巢粮草所在等关键信息。",
        "strategicMeaning": "信息差把“兵力劣势”转化为“局部可击”的窗口。"
      },
      {
        "time": "夜袭乌巢",
        "event": "曹操亲率精兵突袭乌巢，焚毁袁军粮草，淳于琼防守失利。",
        "strategicMeaning": "攻击对方必须救的资源节点，比继续正面硬拼更能改变全局。"
      },
      {
        "time": "袁军动摇",
        "event": "粮草被毁后袁军军心动摇，张郃、高览等转投曹操，局势逆转。",
        "strategicMeaning": "关键节点被击穿后，总量优势会迅速失去组织效率。"
      }
    ],
    "decisionNodes": [
      {
        "title": "得到许攸情报后是否相信并行动？",
        "options": [
          "继续正面相持",
          "等待更多验证",
          "快速组织突袭乌巢"
        ],
        "chosen": "快速组织突袭乌巢",
        "why": "曹操无法长期消耗，乌巢又是袁军必须保护的粮草节点，行动窗口短。",
        "risk": "若情报错误或突袭失败，曹操主力会暴露并承受更大反击。"
      },
      {
        "title": "攻击目标选择在哪里？",
        "options": [
          "攻击袁绍主阵",
          "打击乌巢粮草",
          "撤退保存实力"
        ],
        "chosen": "打击乌巢粮草",
        "why": "主阵是实处，粮草是袁军必须救的虚处，击中后可连带影响军心和补给。",
        "risk": "粮草节点若防守充分，奇袭优势会迅速消失。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "许攸来投后，曹操把正面对峙改造成夜袭乌巢的关键节点打击。",
    "relatedOriginalSentences": [
      "兵之形避实而击虚。",
      "攻其所必救也。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "曹操通过乌巢突袭破坏袁军补给和军心，使自身从正面劣势转为局部优势，最终赢得官渡之战。",
    "modernTransfer": "小团队面对资源更强的对手时，不要直接拼预算、渠道和人力。先找出对方必须保护但短期响应慢的节点，例如关键客户体验、老产品缺口、供应链瓶颈或服务时效，再用小而快的行动形成局部突破。",
    "reusableMethod": [
      "把双方资源对比写清楚，识别哪里不能硬拼。",
      "寻找对方必须保护、但当前防守不足的节点。",
      "核验情报来源和行动窗口，避免把传闻当确定事实。",
      "用速度和集中投入打局部，不把局部胜利误判成全面优势。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "chi-bi",
    "title": "赤壁之战：联盟、火攻与时机",
    "slug": "chi-bi",
    "category": "history",
    "summary": "通过赤壁之战：联盟、火攻与时机理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "fei-shui",
    "title": "淝水之战：心理崩溃与势能逆转",
    "slug": "fei-shui",
    "category": "history",
    "summary": "通过淝水之战：心理崩溃与势能逆转理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "chu-han",
    "title": "楚汉相争：战略耐心与人才组织",
    "slug": "chu-han",
    "category": "history",
    "summary": "通过楚汉相争：战略耐心与人才组织理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "chang-ping",
    "title": "长平之战：主帅更替与战略误判",
    "slug": "chang-ping",
    "category": "history",
    "summary": "通过长平之战：主帅更替与战略误判理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "jing-xing",
    "title": "井陉之战：背水一战的适用边界",
    "slug": "jing-xing",
    "category": "history",
    "summary": "通过井陉之战：背水一战的适用边界理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "startup-giant",
    "title": "小公司面对巨头进入市场",
    "slug": "startup-giant",
    "category": "business",
    "summary": "通过小公司面对巨头进入市场理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "price-war",
    "title": "价格战中的资源消耗",
    "slug": "price-war",
    "category": "business",
    "summary": "通过价格战中的资源消耗理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "niche-product",
    "title": "新产品从细分市场切入",
    "slug": "niche-product",
    "category": "business",
    "summary": "通过新产品从细分市场切入理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "network-effect",
    "title": "平台产品如何建立网络效应",
    "slug": "network-effect",
    "category": "business",
    "summary": "通过平台产品如何建立网络效应理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "brand-position",
    "title": "品牌差异化定位",
    "slug": "brand-position",
    "category": "business",
    "summary": "通过品牌差异化定位理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "project-kickoff",
    "title": "项目启动前如何判断胜算",
    "slug": "project-kickoff",
    "category": "workplace",
    "summary": "通过项目启动前如何判断胜算理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "team-alignment",
    "title": "团队目标不一致如何推进",
    "slug": "team-alignment",
    "category": "workplace",
    "summary": "通过团队目标不一致如何推进理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "resource-fight",
    "title": "如何争取关键资源",
    "slug": "resource-fight",
    "category": "workplace",
    "summary": "通过如何争取关键资源理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "real-decision-maker",
    "title": "如何识别真正决策人",
    "slug": "real-decision-maker",
    "category": "workplace",
    "summary": "通过如何识别真正决策人理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "avoid-internal-friction",
    "title": "如何避免无意义内耗",
    "slug": "avoid-internal-friction",
    "category": "workplace",
    "summary": "通过如何避免无意义内耗理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "system-refactor",
    "title": "大型系统重构是否应该启动",
    "slug": "system-refactor",
    "category": "tech",
    "summary": "通过大型系统重构是否应该启动理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "tech-debt",
    "title": "技术债治理如何避免长期消耗",
    "slug": "tech-debt",
    "category": "tech",
    "summary": "通过技术债治理如何避免长期消耗理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "architecture-pilot",
    "title": "新架构推广如何先做局部胜利",
    "slug": "architecture-pilot",
    "category": "tech",
    "summary": "通过新架构推广如何先做局部胜利理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  },
  {
    "id": "review-platform",
    "title": "代码评审平台如何建立组织共识",
    "slug": "review-platform",
    "category": "tech",
    "summary": "通过代码评审平台如何建立组织共识理解如何把兵法概念落到真实决策节点，而不是停留在抽象口号。",
    "background": "这个案例用于训练用户把局势、资源、对手、约束和时机放在同一张图中分析。关键不是谁更努力，而是谁能识别真正决定胜负的节点。",
    "actors": [
      {
        "name": "主动方",
        "role": "希望快速推进目标的一方",
        "advantages": [
          "行动意愿强",
          "有局部资源"
        ],
        "disadvantages": [
          "容易低估成本",
          "信息可能不足"
        ]
      },
      {
        "name": "对抗方 / 环境约束",
        "role": "形成阻力的一方或外部条件",
        "advantages": [
          "掌握既有资源或规则",
          "能拖慢节奏"
        ],
        "disadvantages": [
          "存在薄弱点或协作成本"
        ]
      }
    ],
    "resourceComparison": [
      {
        "side": "主动方",
        "manpower": "有限",
        "resource": "需要集中使用",
        "morale": "初期较高",
        "information": "需要补足关键事实",
        "position": "应寻找局部突破"
      },
      {
        "side": "对抗方",
        "manpower": "未必更强但有既有优势",
        "resource": "已有渠道或制度优势",
        "morale": "可能稳定",
        "information": "了解规则但不一定敏捷",
        "position": "主战场优势较明显"
      }
    ],
    "constraints": [
      "资源不能无限投入。",
      "如果正面硬拼会进入长期消耗。",
      "必须先找到可验证的关键节点。"
    ],
    "timeline": [
      {
        "time": "阶段一",
        "event": "双方形成对抗或项目进入关键阶段。",
        "strategicMeaning": "需要判断是否适合正面推进。"
      },
      {
        "time": "阶段二",
        "event": "资源消耗和信息差开始显现。",
        "strategicMeaning": "必须识别关键约束。"
      },
      {
        "time": "阶段三",
        "event": "把问题从全面对抗缩小为关键节点突破。",
        "strategicMeaning": "从全面消耗转向局部优势。"
      }
    ],
    "decisionNodes": [
      {
        "title": "是否正面硬拼？",
        "options": [
          "继续投入资源硬拼",
          "收缩保存实力",
          "寻找关键薄弱点"
        ],
        "chosen": "寻找关键薄弱点",
        "why": "正面硬拼会放大资源劣势。",
        "risk": "如果薄弱点判断错误，会错失窗口。"
      },
      {
        "title": "何时行动？",
        "options": [
          "立即行动",
          "等待更多信息",
          "先做局部验证"
        ],
        "chosen": "先做局部验证",
        "why": "在风险可控条件下提高胜算。",
        "risk": "验证过慢会失去时机。"
      }
    ],
    "hardFightConsequence": "如果直接硬拼，资源较弱一方会被拖入对方擅长的主战场，成本不断上升，最终即使局部有成果也可能整体失败。",
    "keyTurningPoint": "把问题从全面对抗缩小为关键节点突破。",
    "relatedOriginalSentences": [
      "避实而击虚。",
      "兵贵胜，不贵久。"
    ],
    "relatedChapterIds": [
      "xu-shi",
      "zuo-zhan"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "result": "优势不一定来自总资源，而可能来自对关键节点的识别和行动速度。",
    "modernTransfer": "现实中先找关键约束和薄弱点，避免把战略问题变成情绪化硬拼。",
    "reusableMethod": [
      "先列资源对比。",
      "找出长期消耗的风险。",
      "识别对方必须保护的节点。",
      "用小规模验证代替全面豪赌。"
    ],
    "practiceQuestions": [
      "这个案例中真正的关键节点是什么？",
      "如果正面硬拼会损失什么？",
      "现实中有哪些类似乌巢的薄弱点？"
    ]
  }
];

export const quotes: DeepQuote[] = [
  {
    "id": "q01",
    "text": "兵者，国之大事，死生之地，存亡之道，不可不察也。",
    "chapterId": "shi-ji",
    "sentenceId": "shi-ji-1",
    "wordAnnotations": [
      {
        "word": "兵者",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "chi-bi"
    ],
    "relatedTrainingIds": [
      "t02"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q02",
    "text": "道者，令民与上同意也。",
    "chapterId": "shi-ji",
    "sentenceId": "shi-ji-1",
    "wordAnnotations": [
      {
        "word": "道者",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "fei-shui"
    ],
    "relatedTrainingIds": [
      "t03"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q03",
    "text": "多算胜，少算不胜，而况于无算乎。",
    "chapterId": "shi-ji",
    "sentenceId": "shi-ji-1",
    "wordAnnotations": [
      {
        "word": "多算",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "chu-han"
    ],
    "relatedTrainingIds": [
      "t04"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q04",
    "text": "兵闻拙速，未睹巧之久也。",
    "chapterId": "zuo-zhan",
    "sentenceId": "zuo-zhan-1",
    "wordAnnotations": [
      {
        "word": "兵闻",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "chang-ping"
    ],
    "relatedTrainingIds": [
      "t05"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q05",
    "text": "兵贵胜，不贵久。",
    "chapterId": "zuo-zhan",
    "sentenceId": "zuo-zhan-1",
    "wordAnnotations": [
      {
        "word": "兵贵",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "jing-xing"
    ],
    "relatedTrainingIds": [
      "t06"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q06",
    "text": "不战而屈人之兵，善之善者也。",
    "chapterId": "mou-gong",
    "sentenceId": "mou-gong-1",
    "wordAnnotations": [
      {
        "word": "不战",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "startup-giant"
    ],
    "relatedTrainingIds": [
      "t07"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q07",
    "text": "上兵伐谋，其次伐交。",
    "chapterId": "mou-gong",
    "sentenceId": "mou-gong-1",
    "wordAnnotations": [
      {
        "word": "上兵",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "price-war"
    ],
    "relatedTrainingIds": [
      "t08"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q08",
    "text": "知彼知己，百战不殆。",
    "chapterId": "mou-gong",
    "sentenceId": "mou-gong-1",
    "wordAnnotations": [
      {
        "word": "知彼",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "niche-product"
    ],
    "relatedTrainingIds": [
      "t09"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q09",
    "text": "先为不可胜，以待敌之可胜。",
    "chapterId": "jun-xing",
    "sentenceId": "jun-xing-1",
    "wordAnnotations": [
      {
        "word": "先为",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "network-effect"
    ],
    "relatedTrainingIds": [
      "t10"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q10",
    "text": "胜兵先胜而后求战。",
    "chapterId": "jun-xing",
    "sentenceId": "jun-xing-1",
    "wordAnnotations": [
      {
        "word": "胜兵",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "brand-position"
    ],
    "relatedTrainingIds": [
      "t11"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q11",
    "text": "战势不过奇正。",
    "chapterId": "bing-shi",
    "sentenceId": "bing-shi-1",
    "wordAnnotations": [
      {
        "word": "战势",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "project-kickoff"
    ],
    "relatedTrainingIds": [
      "t12"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q12",
    "text": "善战人之势，如转圆石于千仞之山者，势也。",
    "chapterId": "bing-shi",
    "sentenceId": "bing-shi-1",
    "wordAnnotations": [
      {
        "word": "善战",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "team-alignment"
    ],
    "relatedTrainingIds": [
      "t13"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q13",
    "text": "善战者，致人而不致于人。",
    "chapterId": "xu-shi",
    "sentenceId": "xu-shi-1",
    "wordAnnotations": [
      {
        "word": "善战",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "resource-fight"
    ],
    "relatedTrainingIds": [
      "t14"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q14",
    "text": "攻其所不守也。",
    "chapterId": "xu-shi",
    "sentenceId": "xu-shi-1",
    "wordAnnotations": [
      {
        "word": "攻其",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "real-decision-maker"
    ],
    "relatedTrainingIds": [
      "t15"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q15",
    "text": "避实而击虚。",
    "chapterId": "xu-shi",
    "sentenceId": "xu-shi-1",
    "wordAnnotations": [
      {
        "word": "避实",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "avoid-internal-friction"
    ],
    "relatedTrainingIds": [
      "t16"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q16",
    "text": "以迂为直，以患为利。",
    "chapterId": "jun-zheng",
    "sentenceId": "jun-zheng-1",
    "wordAnnotations": [
      {
        "word": "以迂",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "system-refactor"
    ],
    "relatedTrainingIds": [
      "t17"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q17",
    "text": "三军可夺气，将军可夺心。",
    "chapterId": "jun-zheng",
    "sentenceId": "jun-zheng-1",
    "wordAnnotations": [
      {
        "word": "三军",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "tech-debt"
    ],
    "relatedTrainingIds": [
      "t18"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q18",
    "text": "智者之虑，必杂于利害。",
    "chapterId": "jiu-bian",
    "sentenceId": "jiu-bian-1",
    "wordAnnotations": [
      {
        "word": "智者",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "architecture-pilot"
    ],
    "relatedTrainingIds": [
      "t19"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q19",
    "text": "途有所不由，军有所不击。",
    "chapterId": "jiu-bian",
    "sentenceId": "jiu-bian-1",
    "wordAnnotations": [
      {
        "word": "途有",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "review-platform"
    ],
    "relatedTrainingIds": [
      "t20"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q20",
    "text": "敌近而静者，恃其险也。",
    "chapterId": "xing-jun",
    "sentenceId": "xing-jun-1",
    "wordAnnotations": [
      {
        "word": "敌近",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "guan-du"
    ],
    "relatedTrainingIds": [
      "t21"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q21",
    "text": "兵非贵益多也。",
    "chapterId": "xing-jun",
    "sentenceId": "xing-jun-1",
    "wordAnnotations": [
      {
        "word": "兵非",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "chi-bi"
    ],
    "relatedTrainingIds": [
      "t22"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q22",
    "text": "地形者，兵之助也。",
    "chapterId": "di-xing",
    "sentenceId": "di-xing-1",
    "wordAnnotations": [
      {
        "word": "地形",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "fei-shui"
    ],
    "relatedTrainingIds": [
      "t23"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q23",
    "text": "知天知地，胜乃不穷。",
    "chapterId": "di-xing",
    "sentenceId": "di-xing-1",
    "wordAnnotations": [
      {
        "word": "知天",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "chu-han"
    ],
    "relatedTrainingIds": [
      "t24"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q24",
    "text": "投之亡地然后存，陷之死地然后生。",
    "chapterId": "jiu-di",
    "sentenceId": "jiu-di-1",
    "wordAnnotations": [
      {
        "word": "投之",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "chang-ping"
    ],
    "relatedTrainingIds": [
      "t25"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q25",
    "text": "始如处女，后如脱兔。",
    "chapterId": "jiu-di",
    "sentenceId": "jiu-di-1",
    "wordAnnotations": [
      {
        "word": "始如",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "jing-xing"
    ],
    "relatedTrainingIds": [
      "t26"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q26",
    "text": "发火有时，起火有日。",
    "chapterId": "huo-gong",
    "sentenceId": "huo-gong-1",
    "wordAnnotations": [
      {
        "word": "发火",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "startup-giant"
    ],
    "relatedTrainingIds": [
      "t27"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q27",
    "text": "主不可以怒而兴师。",
    "chapterId": "huo-gong",
    "sentenceId": "huo-gong-1",
    "wordAnnotations": [
      {
        "word": "主不",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "price-war"
    ],
    "relatedTrainingIds": [
      "t28"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q28",
    "text": "先知者，必取于人。",
    "chapterId": "yong-jian",
    "sentenceId": "yong-jian-1",
    "wordAnnotations": [
      {
        "word": "先知",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "niche-product"
    ],
    "relatedTrainingIds": [
      "t29"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q29",
    "text": "故用间有五。",
    "chapterId": "yong-jian",
    "sentenceId": "yong-jian-1",
    "wordAnnotations": [
      {
        "word": "故用",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "network-effect"
    ],
    "relatedTrainingIds": [
      "t30"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  },
  {
    "id": "q30",
    "text": "事莫密于间。",
    "chapterId": "yong-jian",
    "sentenceId": "yong-jian-1",
    "wordAnnotations": [
      {
        "word": "事莫",
        "explanation": "金句中的关键表达。",
        "modernMapping": "战略判断"
      }
    ],
    "translation": "这句话提醒我们，要把兵法原则转成具体判断，而不是只做口号式理解。",
    "strategicMeaning": "核心在于先看条件、成本、风险和时机，再决定行动方式。",
    "modernApplication": "可用于项目推进、商业竞争、技术治理、个人选择等场景的行动前检查。",
    "misuseWarning": "不要把这句话理解成权谋或攻击他人的技巧，它更重要的是减少误判和降低代价。",
    "relatedCaseIds": [
      "brand-position"
    ],
    "relatedTrainingIds": [
      "t01"
    ],
    "tags": [
      "金句",
      "战略",
      "复盘"
    ]
  }
];

export const trainingScenarios: DeepTrainingScenario[] = [
  {
    "id": "t01",
    "title": "小公司面对巨头进入细分市场",
    "category": "business",
    "difficulty": "medium",
    "background": "你正在处理场景：小公司面对巨头进入细分市场。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t01-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t01-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t01-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t01-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "guan-du"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t02",
    "title": "价格战已经开始，是否跟进降价",
    "category": "business",
    "difficulty": "medium",
    "background": "你正在处理场景：价格战已经开始，是否跟进降价。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t02-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t02-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t02-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t02-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "chi-bi"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t03",
    "title": "新产品上线前发现核心用户画像不清",
    "category": "startup",
    "difficulty": "easy",
    "background": "你正在处理场景：新产品上线前发现核心用户画像不清。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t03-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t03-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t03-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t03-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "fei-shui"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t04",
    "title": "竞品抢先发布，你是否提前发布半成品",
    "category": "startup",
    "difficulty": "medium",
    "background": "你正在处理场景：竞品抢先发布，你是否提前发布半成品。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t04-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t04-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t04-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t04-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "chu-han"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t05",
    "title": "大型系统重构是否全面启动",
    "category": "tech",
    "difficulty": "hard",
    "background": "你正在处理场景：大型系统重构是否全面启动。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t05-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t05-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t05-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t05-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "chang-ping"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t06",
    "title": "技术债治理预算不足如何推进",
    "category": "tech",
    "difficulty": "medium",
    "background": "你正在处理场景：技术债治理预算不足如何推进。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t06-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t06-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t06-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t06-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "jing-xing"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t07",
    "title": "新架构推广遇到老团队抵触",
    "category": "tech",
    "difficulty": "medium",
    "background": "你正在处理场景：新架构推广遇到老团队抵触。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t07-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t07-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t07-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t07-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "startup-giant"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t08",
    "title": "代码评审平台上线前缺少组织共识",
    "category": "tech",
    "difficulty": "medium",
    "background": "你正在处理场景：代码评审平台上线前缺少组织共识。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t08-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t08-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t08-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t08-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "price-war"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t09",
    "title": "跨部门项目目标不一致",
    "category": "workplace",
    "difficulty": "medium",
    "background": "你正在处理场景：跨部门项目目标不一致。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t09-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t09-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t09-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t09-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "niche-product"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t10",
    "title": "领导要求一周内完成高风险改造",
    "category": "workplace",
    "difficulty": "hard",
    "background": "你正在处理场景：领导要求一周内完成高风险改造。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t10-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t10-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t10-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t10-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "network-effect"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t11",
    "title": "团队内部争夺资源导致内耗",
    "category": "team",
    "difficulty": "medium",
    "background": "你正在处理场景：团队内部争夺资源导致内耗。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t11-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t11-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t11-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t11-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "brand-position"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t12",
    "title": "新人主管如何建立执行秩序",
    "category": "team",
    "difficulty": "easy",
    "background": "你正在处理场景：新人主管如何建立执行秩序。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t12-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t12-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t12-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t12-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "project-kickoff"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t13",
    "title": "是否离开稳定工作加入创业公司",
    "category": "personal",
    "difficulty": "medium",
    "background": "你正在处理场景：是否离开稳定工作加入创业公司。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t13-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t13-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t13-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t13-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "team-alignment"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t14",
    "title": "长期投入的副业看不到结果",
    "category": "personal",
    "difficulty": "medium",
    "background": "你正在处理场景：长期投入的副业看不到结果。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t14-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t14-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t14-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t14-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "resource-fight"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t15",
    "title": "客户谈判对方持续压价",
    "category": "business",
    "difficulty": "medium",
    "background": "你正在处理场景：客户谈判对方持续压价。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t15-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t15-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t15-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t15-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "real-decision-maker"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t16",
    "title": "渠道被大平台封锁如何突围",
    "category": "business",
    "difficulty": "hard",
    "background": "你正在处理场景：渠道被大平台封锁如何突围。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t16-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t16-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t16-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t16-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "avoid-internal-friction"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t17",
    "title": "历史推演：曹操是否应袭乌巢",
    "category": "history",
    "difficulty": "medium",
    "background": "你正在处理场景：历史推演：曹操是否应袭乌巢。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t17-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t17-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t17-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t17-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "system-refactor"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t18",
    "title": "历史推演：赤壁是否应等待风向",
    "category": "history",
    "difficulty": "medium",
    "background": "你正在处理场景：历史推演：赤壁是否应等待风向。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t18-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t18-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t18-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t18-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "tech-debt"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t19",
    "title": "上线事故后是否立即重写系统",
    "category": "tech",
    "difficulty": "hard",
    "background": "你正在处理场景：上线事故后是否立即重写系统。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t19-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t19-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t19-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t19-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "architecture-pilot"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t20",
    "title": "项目延期三个月是否继续投入",
    "category": "workplace",
    "difficulty": "medium",
    "background": "你正在处理场景：项目延期三个月是否继续投入。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t20-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t20-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t20-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t20-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "review-platform"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t21",
    "title": "两个业务线争抢同一研发团队",
    "category": "team",
    "difficulty": "medium",
    "background": "你正在处理场景：两个业务线争抢同一研发团队。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t21-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t21-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t21-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t21-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "guan-du"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t22",
    "title": "市场窗口变窄是否加速扩张",
    "category": "startup",
    "difficulty": "hard",
    "background": "你正在处理场景：市场窗口变窄是否加速扩张。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t22-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t22-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t22-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t22-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "chi-bi"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t23",
    "title": "被竞争对手带节奏如何应对",
    "category": "business",
    "difficulty": "medium",
    "background": "你正在处理场景：被竞争对手带节奏如何应对。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t23-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t23-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t23-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t23-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "fei-shui"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t24",
    "title": "数据不足是否启动战略项目",
    "category": "workplace",
    "difficulty": "easy",
    "background": "你正在处理场景：数据不足是否启动战略项目。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t24-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t24-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t24-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t24-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "chu-han"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t25",
    "title": "团队士气低落但任务紧急",
    "category": "team",
    "difficulty": "medium",
    "background": "你正在处理场景：团队士气低落但任务紧急。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t25-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t25-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t25-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t25-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "chang-ping"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t26",
    "title": "老系统迁移如何选择第一块阵地",
    "category": "tech",
    "difficulty": "medium",
    "background": "你正在处理场景：老系统迁移如何选择第一块阵地。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t26-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t26-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t26-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t26-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "jing-xing"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t27",
    "title": "品牌定位模糊是否全面换标语",
    "category": "business",
    "difficulty": "easy",
    "background": "你正在处理场景：品牌定位模糊是否全面换标语。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t27-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t27-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t27-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t27-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "startup-giant"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t28",
    "title": "资源很少但机会窗口明显",
    "category": "startup",
    "difficulty": "medium",
    "background": "你正在处理场景：资源很少但机会窗口明显。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t28-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t28-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t28-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t28-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "bing-gui-sheng"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "bi-shi-ji-xu",
      "bing-gui-sheng"
    ],
    "relatedCaseIds": [
      "price-war"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t29",
    "title": "合作伙伴目标不一致是否继续合作",
    "category": "workplace",
    "difficulty": "medium",
    "background": "你正在处理场景：合作伙伴目标不一致是否继续合作。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t29-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t29-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t29-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t29-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "miao-suan"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "dao-tian-di-jiang-fa",
      "miao-suan"
    ],
    "relatedCaseIds": [
      "niche-product"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  },
  {
    "id": "t30",
    "title": "个人学习计划坚持很久但无反馈",
    "category": "personal",
    "difficulty": "easy",
    "background": "你正在处理场景：个人学习计划坚持很久但无反馈。表面问题是要不要马上行动，深层问题是胜算、成本、风险、信息和对手结构是否已经被看清。",
    "conflict": "如果马上行动，可能抢到时机；如果判断不足，可能进入长期消耗或被对方牵引。",
    "knownFacts": [
      "资源有限，不能无限投入。",
      "当前信息并不完整。",
      "对方或环境存在既有优势。",
      "存在一个可局部验证的切入点。",
      "时间窗口正在变化。"
    ],
    "unknownFacts": [
      "对方真实底线是什么？",
      "用户或业务方是否真正支持？",
      "失败后最大损失是否可承受？"
    ],
    "situationQuestions": [
      {
        "id": "t30-sq1",
        "question": "当前最主要矛盾是什么？",
        "type": "single",
        "options": [
          "资源不足",
          "目标不清",
          "对手太强",
          "信息不足"
        ],
        "explanation": "训练第一步不是选策略，而是识别局势。"
      },
      {
        "id": "t30-sq2",
        "question": "这个场景是否适合正面硬拼？",
        "type": "single",
        "options": [
          "适合",
          "不适合",
          "需要先验证"
        ],
        "explanation": "正面硬拼只在资源、时机、执行都匹配时才成立。"
      }
    ],
    "selfResourceQuestions": [
      {
        "id": "t30-rq1",
        "question": "你最可靠的资源是什么？",
        "type": "multiple",
        "options": [
          "用户口碑",
          "执行速度",
          "预算",
          "组织共识",
          "技术能力"
        ],
        "explanation": "资源识别决定策略边界。"
      }
    ],
    "opponentQuestions": [
      {
        "id": "t30-oq1",
        "question": "对手或环境最可能的优势是什么？",
        "type": "multiple",
        "options": [
          "规模",
          "规则",
          "信息",
          "渠道",
          "时间"
        ],
        "explanation": "知彼不是夸大对手，而是找到不能硬碰的位置。"
      }
    ],
    "options": [
      {
        "id": "A",
        "text": "立即正面推进，用速度和投入压过去。",
        "score": 35,
        "whenItWorks": "资源明显占优且窗口极短。",
        "whenItFails": "资源不足、信息不足、执行链条不稳时。",
        "feedback": "容易把激烈行动误认为有效战略。",
        "relatedConceptIds": [
          "bing-gui-sheng"
        ]
      },
      {
        "id": "B",
        "text": "暂停所有行动，等待信息完全明确。",
        "score": 45,
        "whenItWorks": "失败代价极大且无验证空间。",
        "whenItFails": "窗口快速关闭、可小步验证时。",
        "feedback": "过度等待会丧失主动权。",
        "relatedConceptIds": [
          "miao-suan"
        ]
      },
      {
        "id": "C",
        "text": "先选择一个关键薄弱点做局部验证，再扩大。",
        "score": 88,
        "whenItWorks": "资源有限但能找到清晰验证点。",
        "whenItFails": "薄弱点不存在或验证指标错误。",
        "feedback": "符合先胜后战、避实击虚的思路。",
        "relatedConceptIds": [
          "xian-sheng-hou-zhan",
          "zhi-ji-zhi-bi"
        ]
      },
      {
        "id": "D",
        "text": "复制强者打法，争取看起来更完整。",
        "score": 30,
        "whenItWorks": "对方模式已被验证且你有同等资源。",
        "whenItFails": "多数资源弱势场景都会失败。",
        "feedback": "模仿不等于战略，容易进入别人定义的战场。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi"
        ]
      }
    ],
    "recommendedOptionIds": [
      "C"
    ],
    "scoringRules": [
      {
        "dimension": "胜算",
        "maxScore": 10,
        "description": "评估策略在胜算上的质量。"
      },
      {
        "dimension": "成本",
        "maxScore": 10,
        "description": "评估策略在成本上的质量。"
      },
      {
        "dimension": "风险",
        "maxScore": 10,
        "description": "评估策略在风险上的质量。"
      },
      {
        "dimension": "时机",
        "maxScore": 10,
        "description": "评估策略在时机上的质量。"
      },
      {
        "dimension": "信息",
        "maxScore": 10,
        "description": "评估策略在信息上的质量。"
      },
      {
        "dimension": "对手",
        "maxScore": 10,
        "description": "评估策略在对手上的质量。"
      },
      {
        "dimension": "执行",
        "maxScore": 10,
        "description": "评估策略在执行上的质量。"
      }
    ],
    "bestAnswerCondition": "C 更优的前提是：确实存在可验证的关键薄弱点；验证成本可控；团队能根据结果及时调整；不把局部试验伪装成全面胜利。",
    "relatedOriginalSentences": [
      "胜兵先胜而后求战。",
      "避实而击虚。",
      "知彼知己，百战不殆。"
    ],
    "relatedConceptIds": [
      "xian-sheng-hou-zhan",
      "zhi-ji-zhi-bi"
    ],
    "relatedCaseIds": [
      "network-effect"
    ],
    "wrongThinkingPatterns": [
      "把行动强度当成战略质量。",
      "只看机会不看消耗。",
      "没有区分可控条件与不可控条件。"
    ],
    "reflectionTemplate": [
      "我一开始最想选哪个策略？",
      "我忽略了哪些资源和风险？",
      "这个选择成立的前提是什么？",
      "如果失败，最大损失是什么？",
      "下次遇到类似问题，我会先问什么？"
    ]
  }
];

export const learningPaths: LearningPath[] = [
  {
    "id": "intro",
    "title": "快速入门路线",
    "audience": "第一次读《孙子兵法》的用户",
    "steps": [
      "读首页闭环",
      "读始计篇逐句译注",
      "理解道天地将法",
      "完成 3 道基础训练",
      "写第一份复盘"
    ],
    "chapterIds": [
      "shi-ji",
      "mou-gong"
    ],
    "conceptIds": [
      "dao-tian-di-jiang-fa",
      "bu-zhan-er-qu-ren"
    ]
  },
  {
    "id": "manager",
    "title": "管理者路线",
    "audience": "管理者、项目负责人",
    "steps": [
      "胜算判断",
      "成本控制",
      "组织共识",
      "先胜后战",
      "用间与信息"
    ],
    "chapterIds": [
      "shi-ji",
      "zuo-zhan",
      "jun-xing",
      "yong-jian"
    ],
    "conceptIds": [
      "miao-suan",
      "xian-sheng-hou-zhan"
    ]
  },
  {
    "id": "startup",
    "title": "创业者路线",
    "audience": "创业者、产品负责人",
    "steps": [
      "选择市场",
      "避开巨头主战场",
      "找到切入点",
      "建立差异化",
      "复盘资源消耗"
    ],
    "chapterIds": [
      "shi-ji",
      "mou-gong",
      "xu-shi",
      "jun-zheng"
    ],
    "conceptIds": [
      "bi-shi-ji-xu",
      "zhi-ji-zhi-bi"
    ]
  },
  {
    "id": "workplace",
    "title": "职场实践路线",
    "audience": "项目推进、跨部门协作人群",
    "steps": [
      "识别真实决策人",
      "争取关键资源",
      "避免内耗",
      "判断时机",
      "写行动复盘"
    ],
    "chapterIds": [
      "shi-ji",
      "jiu-bian",
      "xing-jun"
    ],
    "conceptIds": [
      "dao-tian-di-jiang-fa",
      "li-hai-bing-guan"
    ]
  },
  {
    "id": "tech",
    "title": "技术项目路线",
    "audience": "程序员、架构师、技术管理者",
    "steps": [
      "技术债胜算判断",
      "重构成本控制",
      "先做局部胜利",
      "迁移风险复盘",
      "形成组织共识"
    ],
    "chapterIds": [
      "shi-ji",
      "zuo-zhan",
      "jun-xing",
      "xu-shi"
    ],
    "conceptIds": [
      "bing-gui-sheng",
      "xian-sheng-hou-zhan"
    ]
  }
];

export const stats = {
  chapters: chapters.length,
  concepts: concepts.length,
  cases: cases.length,
  trainings: trainingScenarios.length,
  quotes: quotes.length,
  sentenceBlocks: chapters.reduce((sum, chapter) => sum + chapter.sentences.length, 0)
};

export function getChapter(slug: string) { return chapters.find((chapter) => chapter.slug === slug); }
export function getConcept(slug: string) { return concepts.find((concept) => concept.slug === slug); }
export function getCase(slug: string) { return cases.find((item) => item.slug === slug); }
export function getTraining(id: string) { return trainingScenarios.find((item) => item.id === id); }
export function getQuote(id: string) { return quotes.find((item) => item.id === id); }
