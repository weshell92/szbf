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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "说明战争与重大行动的风险",
      "提出五事：道天地将法",
      "提出七计比较法",
      "强调庙算与胜算"
    ],
    "fullOriginal": "孙子曰：兵者，国之大事，死生之地，存亡之道，不可不察也。\n故经之以五事，校之以计，而索其情：一曰道，二曰天，三曰地，四曰将，五曰法。\n道者，令民与上同意也，可与之死，可与之生，而不危也。\n天者，阴阳、寒暑、时制也。\n地者，远近、险易、广狭、死生也。\n将者，智、信、仁、勇、严也。\n法者，曲制、官道、主用也。\n凡此五者，将莫不闻，知之者胜，不知者不胜。\n故校之以计，而索其情，曰：主孰有道？将孰有能？天地孰得？法令孰行？兵众孰强？士卒孰练？赏罚孰明？\n吾以此知胜负矣。\n将听吾计，用之必胜，留之；将不听吾计，用之必败，去之。\n计利以听，乃为之势，以佐其外。势者，因利而制权也。\n兵者，诡道也。\n故能而示之不能，用而示之不用，近而示之远，远而示之近。\n利而诱之，乱而取之，实而备之，强而避之。\n怒而挠之，卑而骄之，佚而劳之，亲而离之。\n攻其无备，出其不意。\n此兵家之胜，不可先传也。\n夫未战而庙算胜者，得算多也；未战而庙算不胜者，得算少也。\n多算胜，少算不胜，而况于无算乎！\n吾以此观之，胜负见矣。",
    "sentences": [
      {
        "id": "shi-ji-1",
        "chapterId": "shi-ji",
        "order": 1,
        "original": "孙子曰：兵者，国之大事，死生之地，存亡之道，不可不察也。",
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
            "explanation": "关系生存、失败代价与责任边界的处境。",
            "modernMapping": "风险边界"
          },
          {
            "word": "存亡之道",
            "explanation": "决定组织能否延续的关键路径。",
            "modernMapping": "长期存续"
          }
        ],
        "translation": "孙子说：战争是国家最重大的事情，关系到人民的生死，关系到国家的存亡，不能不认真考察。",
        "literalTranslation": "孙子说：战争是国家最重大的事情，关系到人民的生死，关系到国家的存亡，不能不认真考察。",
        "freeTranslation": "凡是代价足以影响生死存亡的行动，都必须先审慎评估。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "translation": "所以，要用五个方面作为基本标准来分析战争，再通过具体比较来判断双方实际情况。这五个方面是：一是政治与人心，二是天时，三是地利，四是将帅，五是制度。",
        "literalTranslation": "所以，要用五个方面作为基本标准来分析战争，再通过具体比较来判断双方实际情况。这五个方面是：一是政治与人心，二是天时，三是地利，四是将帅，五是制度。",
        "freeTranslation": "这句话强调：行动前先做结构化比较，胜算来自可验证条件，而不是气势或愿望。",
        "coreMeaning": "行动前先做结构化比较，胜算来自可验证条件，而不是气势或愿望。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "道者，令民与上同意也，可与之死，可与之生，而不危也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "道者",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "令民与上",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "所谓“道”，是指君主与民众目标一致、上下同心。这样，百姓可以与君主同生共死，而不会在危难时离心离德。",
        "literalTranslation": "所谓“道”，是指君主与民众目标一致、上下同心。这样，百姓可以与君主同生共死，而不会在危难时离心离德。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
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
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-4",
        "chapterId": "shi-ji",
        "order": 4,
        "original": "天者，阴阳、寒暑、时制也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "天者",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "阴阳",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "所谓“天”，是指昼夜、晴雨、寒暑、季节时令等自然条件。",
        "literalTranslation": "所谓“天”，是指昼夜、晴雨、寒暑、季节时令等自然条件。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t05",
          "t12"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-5",
        "chapterId": "shi-ji",
        "order": 5,
        "original": "地者，远近、险易、广狭、死生也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
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
        "translation": "所谓“地”，是指道路远近、地势险易、地域宽窄，以及哪里适合生存、哪里容易陷入死地。",
        "literalTranslation": "所谓“地”，是指道路远近、地势险易、地域宽窄，以及哪里适合生存、哪里容易陷入死地。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t06",
          "t13"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-6",
        "chapterId": "shi-ji",
        "order": 6,
        "original": "将者，智、信、仁、勇、严也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将者",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "严也",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "所谓“将”，是指将帅是否具备智慧、诚信、仁爱、勇敢和威严。",
        "literalTranslation": "所谓“将”，是指将帅是否具备智慧、诚信、仁爱、勇敢和威严。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "法者，曲制、官道、主用也。",
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
        "translation": "所谓“法”，是指军队编制、管理制度、职责分工、后勤供应和资源调度。",
        "literalTranslation": "所谓“法”，是指军队编制、管理制度、职责分工、后勤供应和资源调度。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
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
        "original": "凡此五者，将莫不闻，知之者胜，不知者不胜。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "凡此五者",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "将莫不闻",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "这五个方面，将帅没有不知道的；但真正理解并能运用的人会胜利，不能真正理解和运用的人就会失败。",
        "literalTranslation": "这五个方面，将帅没有不知道的；但真正理解并能运用的人会胜利，不能真正理解和运用的人就会失败。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-9",
        "chapterId": "shi-ji",
        "order": 9,
        "original": "故校之以计，而索其情，曰：主孰有道？将孰有能？天地孰得？法令孰行？兵众孰强？士卒孰练？赏罚孰明？",
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
        "translation": "所以，还要通过具体比较来探究双方实情：哪一方君主更得人心？哪一方将帅更有能力？哪一方更占天时地利？哪一方法令制度执行得更好？哪一方兵力更强？哪一方士卒训练更熟练？哪一方赏罚更分明？",
        "literalTranslation": "所以，还要通过具体比较来探究双方实情：哪一方君主更得人心？哪一方将帅更有能力？哪一方更占天时地利？哪一方法令制度执行得更好？哪一方兵力更强？哪一方士卒训练更熟练？哪一方赏罚更分明？",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t10",
          "t17"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-10",
        "chapterId": "shi-ji",
        "order": 10,
        "original": "吾以此知胜负矣。",
        "words": [
          {
            "word": "知胜",
            "explanation": "知道胜利成立的条件。",
            "modernMapping": "可行性判断"
          },
          {
            "word": "吾以此知",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "胜负矣",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "我凭这些，就可以判断胜负。",
        "literalTranslation": "我凭这些，就可以判断胜负。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于胜算判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-11",
        "chapterId": "shi-ji",
        "order": 11,
        "original": "将听吾计，用之必胜，留之；将不听吾计，用之必败，去之。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将听吾计",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "用之必胜",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "如果将帅听从我的计策，用他必胜，可以留下；如果不听从我的计策，用他必败，就应让他离开。",
        "literalTranslation": "如果将帅听从我的计策，用他必胜，可以留下；如果不听从我的计策，用他必败，就应让他离开。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-12",
        "chapterId": "shi-ji",
        "order": 12,
        "original": "计利以听，乃为之势，以佐其外。势者，因利而制权也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "计利以听",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "乃为之势",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "在判断计策有利并被采纳之后，还要进一步创造有利态势，以辅助军事行动。所谓“势”，就是根据有利条件灵活掌握主动权。",
        "literalTranslation": "在判断计策有利并被采纳之后，还要进一步创造有利态势，以辅助军事行动。所谓“势”，就是根据有利条件灵活掌握主动权。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "做产品、投资或组织变革前，先列出可验证的有利条件和不利条件，用证据数量决定是否推进。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-13",
        "chapterId": "shi-ji",
        "order": 13,
        "original": "兵者，诡道也。",
        "words": [
          {
            "word": "诡道",
            "explanation": "通过虚实变化保护真实意图，核心是因势制权。",
            "modernMapping": "信息策略"
          },
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          }
        ],
        "translation": "用兵之道，重在虚实变化。",
        "literalTranslation": "用兵之道，重在虚实变化。",
        "freeTranslation": "这句话强调：虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "coreMeaning": "虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把“诡道”理解成无底线欺骗；它强调的是信息控制、虚实变化和因势制权，不能突破法律与伦理边界。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
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
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-14",
        "chapterId": "shi-ji",
        "order": 14,
        "original": "故能而示之不能，用而示之不用，近而示之远，远而示之近。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "故能而示",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "之不能",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "所以，有能力却要让敌人以为我没有能力；准备使用某种行动，却让敌人以为我不会使用；要攻近处，却让敌人以为我要攻远处；要攻远处，却让敌人以为我要攻近处。",
        "literalTranslation": "所以，有能力却要让敌人以为我没有能力；准备使用某种行动，却让敌人以为我不会使用；要攻近处，却让敌人以为我要攻远处；要攻远处，却让敌人以为我要攻近处。",
        "freeTranslation": "这句话强调：虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "coreMeaning": "虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "modernApplication": "竞争中不要过早暴露真实路线、发布时间和资源重点，可用试点、节奏控制和信息差保护主动权。",
        "misunderstanding": "不要把“诡道”理解成无底线欺骗；它强调的是信息控制、虚实变化和因势制权，不能突破法律与伦理边界。",
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
          "t15",
          "t22"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "shi-ji-15",
        "chapterId": "shi-ji",
        "order": 15,
        "original": "利而诱之，乱而取之，实而备之，强而避之。",
        "words": [
          {
            "word": "利而诱之",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "乱而取之",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "实而备之",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "敌人贪利，就用利益引诱他；敌人混乱，就趁机攻击他；敌人实力充足，就要谨慎防备；敌人强大，就要暂时避开锋芒。",
        "literalTranslation": "敌人贪利，就用利益引诱他；敌人混乱，就趁机攻击他；敌人实力充足，就要谨慎防备；敌人强大，就要暂时避开锋芒。",
        "freeTranslation": "这句话强调：虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "coreMeaning": "虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "modernApplication": "竞争中不要过早暴露真实路线、发布时间和资源重点，可用试点、节奏控制和信息差保护主动权。",
        "misunderstanding": "不要把“诡道”理解成无底线欺骗；它强调的是信息控制、虚实变化和因势制权，不能突破法律与伦理边界。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
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
        "original": "怒而挠之，卑而骄之，佚而劳之，亲而离之。",
        "words": [
          {
            "word": "怒而挠之",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "卑而骄之",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "佚而劳之",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "敌人易怒，就设法激怒扰乱他；敌人谦卑谨慎，就设法让他骄傲轻敌；敌人安逸，就设法使他疲劳；敌人内部亲密团结，就设法离间他们。",
        "literalTranslation": "敌人易怒，就设法激怒扰乱他；敌人谦卑谨慎，就设法让他骄傲轻敌；敌人安逸，就设法使他疲劳；敌人内部亲密团结，就设法离间他们。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "危机决策中先问是否有明确收益、能否达成目标、是否真正危险，避免被愤怒或焦虑驱动。",
        "misunderstanding": "不要把“诡道”理解成无底线欺骗；它强调的是信息控制、虚实变化和因势制权，不能突破法律与伦理边界。",
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
        "original": "攻其无备，出其不意。",
        "words": [
          {
            "word": "攻其无备",
            "explanation": "攻击对方没有准备的地方。",
            "modernMapping": "薄弱点切入"
          },
          {
            "word": "出其不意",
            "explanation": "在对方预料之外行动。",
            "modernMapping": "节奏差"
          }
        ],
        "translation": "要攻击敌人没有防备的地方，在敌人意料不到的时候行动。",
        "literalTranslation": "要攻击敌人没有防备的地方，在敌人意料不到的时候行动。",
        "freeTranslation": "这句话强调：虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "coreMeaning": "虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "modernApplication": "竞争中不要过早暴露真实路线、发布时间和资源重点，可用试点、节奏控制和信息差保护主动权。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "bi-shi-ji-xu",
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
        "original": "此兵家之胜，不可先传也。",
        "words": [
          {
            "word": "此兵家之",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "不可先传",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "这些是兵家取胜的奥妙，不能在战前机械地预先说明，因为它必须根据实际情况变化而变化。",
        "literalTranslation": "这些是兵家取胜的奥妙，不能在战前机械地预先说明，因为它必须根据实际情况变化而变化。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于胜算判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "qi-ji"
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
        "translation": "开战之前，在庙堂上筹划时已经具备胜利条件的，是因为胜算多；开战之前筹划时看不到胜利条件的，是因为胜算少。",
        "literalTranslation": "开战之前，在庙堂上筹划时已经具备胜利条件的，是因为胜算多；开战之前筹划时看不到胜利条件的，是因为胜算少。",
        "freeTranslation": "这句话强调：行动前先做结构化比较，胜算来自可验证条件，而不是气势或愿望。",
        "coreMeaning": "行动前先做结构化比较，胜算来自可验证条件，而不是气势或愿望。",
        "modernApplication": "做产品、投资或组织变革前，先列出可验证的有利条件和不利条件，用证据数量决定是否推进。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "shi-ji-20",
        "chapterId": "shi-ji",
        "order": 20,
        "original": "多算胜，少算不胜，而况于无算乎！",
        "words": [
          {
            "word": "多算胜",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "少算不胜",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "而况于无",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "胜算多就容易胜，胜算少就难以胜，更何况完全没有筹划呢？",
        "literalTranslation": "胜算多就容易胜，胜算少就难以胜，更何况完全没有筹划呢？",
        "freeTranslation": "这句话强调：行动前先做结构化比较，胜算来自可验证条件，而不是气势或愿望。",
        "coreMeaning": "行动前先做结构化比较，胜算来自可验证条件，而不是气势或愿望。",
        "modernApplication": "用于胜算判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "吾以此观之，胜负见矣。",
        "words": [
          {
            "word": "吾以此观",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          },
          {
            "word": "胜负见矣",
            "explanation": "理解这个表达时，应结合“胜算判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "胜算判断"
          }
        ],
        "translation": "我根据这些观察，胜负就已经可以看出来了。",
        "literalTranslation": "我根据这些观察，胜负就已经可以看出来了。",
        "freeTranslation": "这句话强调：本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“胜算判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于胜算判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“胜算判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "列出战争成本",
      "说明久战伤害",
      "强调拙速胜过巧久",
      "总结兵贵胜不贵久"
    ],
    "fullOriginal": "孙子曰：凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮，则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。\n其用战也胜，久则钝兵挫锐，攻城则力屈，久暴师则国用不足。\n夫钝兵挫锐，屈力殚货，则诸侯乘其弊而起，虽有智者，不能善其后矣。\n故兵闻拙速，未睹巧之久也。\n夫兵久而国利者，未之有也。\n故不尽知用兵之害者，则不能尽知用兵之利也。\n善用兵者，役不再籍，粮不三载；取用于国，因粮于敌，故军食可足也。\n国之贫于师者远输，远输则百姓贫。\n近于师者贵卖，贵卖则百姓财竭；财竭则急于丘役。\n力屈、财殚，中原内虚于家；百姓之费，十去其七；公家之费，破车罢马，甲胄矢弩，戟楯蔽橹，丘牛大车，十去其六。\n故智将务食于敌，食敌一钟，当吾二十钟；𦮼秆一石，当吾二十石。\n故杀敌者，怒也；取敌之利者，货也。\n故车战，得车十乘已上，赏其先得者，而更其旌旗，车杂而乘之，卒善而养之，是谓胜敌而益强。\n故兵贵胜，不贵久。\n故知兵之将，民之司命，国家安危之主也。",
    "sentences": [
      {
        "id": "zuo-zhan-1",
        "chapterId": "zuo-zhan",
        "order": 1,
        "original": "孙子曰：凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮，则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "孙子曰",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "凡用兵之",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "孙子说：凡是兴兵作战，如果要出动轻车千辆、重车千辆、披甲士卒十万，并从千里之外运输粮草，那么前方后方的费用、外交宾客的开支、修造器械的材料、车辆甲胄的供给，每天都要耗费大量钱财。必须有这样的国力支撑，十万大军才能行动。",
        "literalTranslation": "孙子说：凡是兴兵作战，如果要出动轻车千辆、重车千辆、披甲士卒十万，并从千里之外运输粮草，那么前方后方的费用、外交宾客的开支、修造器械的材料、车辆甲胄的供给，每天都要耗费大量钱财。必须有这样的国力支撑，十万大军才能行动。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-2",
        "chapterId": "zuo-zhan",
        "order": 2,
        "original": "其用战也胜，久则钝兵挫锐，攻城则力屈，久暴师则国用不足。",
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
        "translation": "战争即使能够取胜，如果拖延太久，也会使军队疲惫、锐气受挫；如果攻城久攻不下，力量就会耗尽；军队长期在外，国家财政也会不足。",
        "literalTranslation": "战争即使能够取胜，如果拖延太久，也会使军队疲惫、锐气受挫；如果攻城久攻不下，力量就会耗尽；军队长期在外，国家财政也会不足。",
        "freeTranslation": "这句话强调：长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t04",
          "t11"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-3",
        "chapterId": "zuo-zhan",
        "order": 3,
        "original": "夫钝兵挫锐，屈力殚货，则诸侯乘其弊而起，虽有智者，不能善其后矣。",
        "words": [
          {
            "word": "钝兵挫锐",
            "explanation": "军队疲惫、锐气受损。",
            "modernMapping": "团队消耗"
          },
          {
            "word": "夫钝兵挫",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "屈力殚货",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "军队疲惫、锐气受损，力量耗尽、财物枯竭，其他诸侯就会趁着你的疲敝起兵。到那时，即使有聪明的人，也难以妥善收拾残局。",
        "literalTranslation": "军队疲惫、锐气受损，力量耗尽、财物枯竭，其他诸侯就会趁着你的疲敝起兵。到那时，即使有聪明的人，也难以妥善收拾残局。",
        "freeTranslation": "这句话强调：长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t05",
          "t12"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-4",
        "chapterId": "zuo-zhan",
        "order": 4,
        "original": "故兵闻拙速，未睹巧之久也。",
        "words": [
          {
            "word": "故兵闻拙",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "未睹巧之",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "久也",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "所以，只听说过用兵虽然笨拙但贵在迅速，从没见过战争拖得长久还能算高明的。",
        "literalTranslation": "所以，只听说过用兵虽然笨拙但贵在迅速，从没见过战争拖得长久还能算高明的。",
        "freeTranslation": "这句话强调：长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "misunderstanding": "不要把“贵胜”理解成盲目求快；它反对的是无效拖耗，不是省略准备。",
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
        "original": "夫兵久而国利者，未之有也。",
        "words": [
          {
            "word": "夫兵久而",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "国利者",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "未之有也",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "战争长期拖延而对国家有利，这样的事从来没有过。",
        "literalTranslation": "战争长期拖延而对国家有利，这样的事从来没有过。",
        "freeTranslation": "这句话强调：长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t07",
          "t14"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-6",
        "chapterId": "zuo-zhan",
        "order": 6,
        "original": "故不尽知用兵之害者，则不能尽知用兵之利也。",
        "words": [
          {
            "word": "故不尽知",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "用兵之害",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "则不能尽",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "所以，如果不能充分认识战争的危害，也就不能真正理解战争的利益。",
        "literalTranslation": "所以，如果不能充分认识战争的危害，也就不能真正理解战争的利益。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于成本控制时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t08",
          "t15"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-7",
        "chapterId": "zuo-zhan",
        "order": 7,
        "original": "善用兵者，役不再籍，粮不三载；取用于国，因粮于敌，故军食可足也。",
        "words": [
          {
            "word": "因粮于敌",
            "explanation": "利用外部或对方资源补给自己。",
            "modernMapping": "资源转化"
          },
          {
            "word": "善用兵者",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "役不再籍",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "善于用兵的人，不会反复征兵，也不会多次从国内远途运输粮草；武器装备取自本国，粮食尽量取自敌方，所以军粮可以供应充足。",
        "literalTranslation": "善于用兵的人，不会反复征兵，也不会多次从国内远途运输粮草；武器装备取自本国，粮食尽量取自敌方，所以军粮可以供应充足。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "商业扩张可优先寻找能利用现有渠道、伙伴资源或客户网络的路径，让每次胜利反过来补强能力。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-8",
        "chapterId": "zuo-zhan",
        "order": 8,
        "original": "国之贫于师者远输，远输则百姓贫。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "国之贫于",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "师者远输",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "国家因战争而贫困，主要是因为远距离运输。远距离运输会使百姓贫穷。",
        "literalTranslation": "国家因战争而贫困，主要是因为远距离运输。远距离运输会使百姓贫穷。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于成本控制时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-9",
        "chapterId": "zuo-zhan",
        "order": 9,
        "original": "近于师者贵卖，贵卖则百姓财竭；财竭则急于丘役。",
        "words": [
          {
            "word": "近于师者",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "贵卖",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "贵卖则百",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "靠近军队的地方，物价会因军需暴涨；物价暴涨，百姓财产就会枯竭；百姓财产枯竭，国家征税服役就会更加急迫。",
        "literalTranslation": "靠近军队的地方，物价会因军需暴涨；物价暴涨，百姓财产就会枯竭；百姓财产枯竭，国家征税服役就会更加急迫。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于成本控制时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "zuo-zhan-10",
        "chapterId": "zuo-zhan",
        "order": 10,
        "original": "力屈、财殚，中原内虚于家；百姓之费，十去其七；公家之费，破车罢马，甲胄矢弩，戟楯蔽橹，丘牛大车，十去其六。",
        "words": [
          {
            "word": "力屈",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "财殚",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "中原内虚",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "兵力疲惫、财物耗尽，国内家家户户空虚。百姓的财产会损失十分之七；国家的费用也会因车辆损坏、马匹疲惫、甲胄弓弩、矛盾橹牌、牛车运输等消耗而损失十分之六。",
        "literalTranslation": "兵力疲惫、财物耗尽，国内家家户户空虚。百姓的财产会损失十分之七；国家的费用也会因车辆损坏、马匹疲惫、甲胄弓弩、矛盾橹牌、牛车运输等消耗而损失十分之六。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
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
        "original": "故智将务食于敌，食敌一钟，当吾二十钟；𦮼秆一石，当吾二十石。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故智将务",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "食于敌",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "所以，聪明的将帅一定重视从敌方取得粮草。吃敌方一钟粮食，相当于从本国运来二十钟；用敌方一石草料，相当于从本国运来二十石。",
        "literalTranslation": "所以，聪明的将帅一定重视从敌方取得粮草。吃敌方一钟粮食，相当于从本国运来二十钟；用敌方一石草料，相当于从本国运来二十石。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "怒也",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "取敌之利",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "要使士兵奋勇杀敌，需要激发他们的斗志；要使士兵夺取敌人的物资，需要用利益奖励他们。",
        "literalTranslation": "要使士兵奋勇杀敌，需要激发他们的斗志；要使士兵夺取敌人的物资，需要用利益奖励他们。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "商业扩张可优先寻找能利用现有渠道、伙伴资源或客户网络的路径，让每次胜利反过来补强能力。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
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
        "original": "故车战，得车十乘已上，赏其先得者，而更其旌旗，车杂而乘之，卒善而养之，是谓胜敌而益强。",
        "words": [
          {
            "word": "胜敌而益强",
            "explanation": "取胜后还能增强自身能力。",
            "modernMapping": "正向积累"
          },
          {
            "word": "旌旗",
            "explanation": "古代传递军令的视觉信号。",
            "modernMapping": "协同标识"
          }
        ],
        "translation": "所以，车战中夺得敌车十辆以上，要奖赏最先夺车的人，并换上我方旗帜，把缴获的战车混编使用；对于俘虏的士卒，要妥善安置和善待。这样才叫战胜敌人而使自己更强。",
        "literalTranslation": "所以，车战中夺得敌车十辆以上，要奖赏最先夺车的人，并换上我方旗帜，把缴获的战车混编使用；对于俘虏的士卒，要妥善安置和善待。这样才叫战胜敌人而使自己更强。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "商业扩张可优先寻找能利用现有渠道、伙伴资源或客户网络的路径，让每次胜利反过来补强能力。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "zuo-zhan-14",
        "chapterId": "zuo-zhan",
        "order": 14,
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
        "translation": "所以，用兵贵在迅速取胜，不贵在持久消耗。",
        "literalTranslation": "所以，用兵贵在迅速取胜，不贵在持久消耗。",
        "freeTranslation": "真正重要的是有效达成目标，而不是把资源耗在拖延的过程里。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "misunderstanding": "不要把“贵胜”理解成盲目求快；它反对的是无效拖耗，不是省略准备。",
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
          "t16",
          "t23"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "zuo-zhan-15",
        "chapterId": "zuo-zhan",
        "order": 15,
        "original": "故知兵之将，民之司命，国家安危之主也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故知兵之",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          },
          {
            "word": "民之司命",
            "explanation": "理解这个表达时，应结合“成本控制”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "成本控制"
          }
        ],
        "translation": "真正懂得战争的将帅，是掌握人民生死命运的人，是决定国家安危的人。",
        "literalTranslation": "真正懂得战争的将帅，是掌握人民生死命运的人，是决定国家安危的人。",
        "freeTranslation": "这句话强调：本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“成本控制”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“成本控制”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t17",
          "t24"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "比较全胜与破胜",
      "提出不战而屈人之兵",
      "提出伐谋伐交伐兵攻城层级",
      "强调知己知彼"
    ],
    "fullOriginal": "孙子曰：凡用兵之法，全国为上，破国次之；全军为上，破军次之；全旅为上，破旅次之；全卒为上，破卒次之；全伍为上，破伍次之。\n是故百战百胜，非善之善者也；不战而屈人之兵，善之善者也。\n故上兵伐谋，其次伐交，其次伐兵，其下攻城。\n攻城之法，为不得已。\n修橹轒辒，具器械，三月而后成；距堙，又三月而后已。\n将不胜其忿，而蚁附之，杀士三分之一，而城不拔者，此攻之灾也。\n故善用兵者，屈人之兵而非战也，拔人之城而非攻也，毁人之国而非久也，必以全争于天下，故兵不顿而利可全，此谋攻之法也。\n故用兵之法，十则围之，五则攻之，倍则分之，敌则能战之，少则能逃之，不若则能避之。\n故小敌之坚，大敌之擒也。\n夫将者，国之辅也。辅周则国必强，辅隙则国必弱。\n故君之所以患于军者三：不知军之不可以进而谓之进，不知军之不可以退而谓之退，是谓縻军。\n不知三军之事而同三军之政者，则军士惑矣。\n不知三军之权而同三军之任者，则军士疑矣。\n三军既惑且疑，则诸侯之难至矣。是谓乱军引胜。\n故知胜有五：知可以战与不可以战者胜；识众寡之用者胜；上下同欲者胜；以虞待不虞者胜；将能而君不御者胜。\n此五者，知胜之道也。\n故曰：知彼知己，百战不殆；不知彼而知己，一胜一负；不知彼不知己，每战必殆。",
    "sentences": [
      {
        "id": "mou-gong-1",
        "chapterId": "mou-gong",
        "order": 1,
        "original": "孙子曰：凡用兵之法，全国为上，破国次之；全军为上，破军次之；全旅为上，破旅次之；全卒为上，破卒次之；全伍为上，破伍次之。",
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
        "translation": "孙子说：凡是用兵，能完整地保全敌国而使其屈服，是上策；把敌国打残打破，是次一等。能完整地保全敌军而使其屈服，是上策；击破敌军，是次一等。对旅、卒、伍等各级部队也是如此，能完整降服最好，彻底摧毁次之。",
        "literalTranslation": "孙子说：凡是用兵，能完整地保全敌国而使其屈服，是上策；把敌国打残打破，是次一等。能完整地保全敌军而使其屈服，是上策；击破敌军，是次一等。对旅、卒、伍等各级部队也是如此，能完整降服最好，彻底摧毁次之。",
        "freeTranslation": "这句话强调：最高层次的竞争是改变局势和预期，而不是把对抗推到最昂贵的阶段。",
        "coreMeaning": "最高层次的竞争是改变局势和预期，而不是把对抗推到最昂贵的阶段。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "是故百战百胜，非善之善者也；不战而屈人之兵，善之善者也。",
        "words": [
          {
            "word": "不战而屈人之兵",
            "explanation": "不靠正面交战就让对手屈服。",
            "modernMapping": "非对称竞争"
          },
          {
            "word": "是故百战",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "百胜",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "所以，百战百胜，并不是最高明中的最高明；不通过正面大战就能使敌军屈服，才是最高明中的最高明。",
        "literalTranslation": "所以，百战百胜，并不是最高明中的最高明；不通过正面大战就能使敌军屈服，才是最高明中的最高明。",
        "freeTranslation": "能通过结构性优势解决问题，就不要轻易进入高成本正面对抗。",
        "coreMeaning": "最高层次的竞争是改变局势和预期，而不是把对抗推到最昂贵的阶段。",
        "modernApplication": "谈判和竞争中优先改变对方预期、伙伴关系和成本结构，正面硬拼应作为最后选项。",
        "misunderstanding": "不要把“不战”理解成逃避竞争；它要求用更低成本改变局势。",
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
        "translation": "因此，最高层次的用兵是破坏敌人的谋略；其次是破坏敌人的外交联盟；再次是攻击敌人的军队；最下策才是攻打城池。",
        "literalTranslation": "因此，最高层次的用兵是破坏敌人的谋略；其次是破坏敌人的外交联盟；再次是攻击敌人的军队；最下策才是攻打城池。",
        "freeTranslation": "这句话强调：最高层次的竞争是改变局势和预期，而不是把对抗推到最昂贵的阶段。",
        "coreMeaning": "最高层次的竞争是改变局势和预期，而不是把对抗推到最昂贵的阶段。",
        "modernApplication": "谈判和竞争中优先改变对方预期、伙伴关系和成本结构，正面硬拼应作为最后选项。",
        "misunderstanding": "不要把“不战”理解成逃避竞争；它要求用更低成本改变局势。",
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
        "translation": "攻城，是不得已才采用的办法。",
        "literalTranslation": "攻城，是不得已才采用的办法。",
        "freeTranslation": "这句话强调：最高层次的竞争是改变局势和预期，而不是把对抗推到最昂贵的阶段。",
        "coreMeaning": "最高层次的竞争是改变局势和预期，而不是把对抗推到最昂贵的阶段。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "具器械",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "三月而后",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "制造大盾、攻城车，准备各种攻城器械，需要几个月才能完成；堆筑攻城土山，又需要几个月。",
        "literalTranslation": "制造大盾、攻城车，准备各种攻城器械，需要几个月才能完成；堆筑攻城土山，又需要几个月。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于不战而胜时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "将不胜其忿，而蚁附之，杀士三分之一，而城不拔者，此攻之灾也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将不胜其",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "而蚁附之",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "如果将帅压不住怒气，命令士兵像蚂蚁一样爬城强攻，士兵死伤三分之一而城还没攻下，这就是攻城带来的灾难。",
        "literalTranslation": "如果将帅压不住怒气，命令士兵像蚂蚁一样爬城强攻，士兵死伤三分之一而城还没攻下，这就是攻城带来的灾难。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "translation": "所以，善于用兵的人，能使敌军屈服而不靠血战；能夺取敌城而不靠强攻；能制服敌国而不靠长期消耗。他一定要用“保全”的方式争胜于天下，因此军队不疲惫，而利益能够完整取得。这就是谋攻的方法。",
        "literalTranslation": "所以，善于用兵的人，能使敌军屈服而不靠血战；能夺取敌城而不靠强攻；能制服敌国而不靠长期消耗。他一定要用“保全”的方式争胜于天下，因此军队不疲惫，而利益能够完整取得。这就是谋攻的方法。",
        "freeTranslation": "这句话强调：长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "十则围之",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "所以，用兵的原则是：兵力十倍于敌，就包围敌人；五倍于敌，就进攻敌人；两倍于敌，就设法分割敌人；势均力敌，就要善于作战；兵力较少，就要能够脱离；明显不如敌人，就要避免决战。",
        "literalTranslation": "所以，用兵的原则是：兵力十倍于敌，就包围敌人；五倍于敌，就进攻敌人；两倍于敌，就设法分割敌人；势均力敌，就要善于作战；兵力较少，就要能够脱离；明显不如敌人，就要避免决战。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "大敌之擒",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "弱小的一方如果硬要固执死拼，就会成为强大敌人的俘虏。",
        "literalTranslation": "弱小的一方如果硬要固执死拼，就会成为强大敌人的俘虏。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于不战而胜时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "夫将者，国之辅也。辅周则国必强，辅隙则国必弱。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "夫将者",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "国之辅也",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "将帅是国家的辅佐。辅佐周密，国家就强；辅佐有缺陷，国家就弱。",
        "literalTranslation": "将帅是国家的辅佐。辅佐周密，国家就强；辅佐有缺陷，国家就弱。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "故君之所以患于军者三：不知军之不可以进而谓之进，不知军之不可以退而谓之退，是谓縻军。",
        "words": [
          {
            "word": "故君之所",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "以患于军",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "者三",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "君主危害军队的情况有三种：不知道军队不能前进，却命令它前进；不知道军队不能后退，却命令它后退，这叫束缚军队。",
        "literalTranslation": "君主危害军队的情况有三种：不知道军队不能前进，却命令它前进；不知道军队不能后退，却命令它后退，这叫束缚军队。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于不战而胜时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "important"
      },
      {
        "id": "mou-gong-12",
        "chapterId": "mou-gong",
        "order": 12,
        "original": "不知三军之事而同三军之政者，则军士惑矣。",
        "words": [
          {
            "word": "不知三军",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "之事而同",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "三军之政",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "不懂军队内部事务，却干预军队行政管理，就会使士兵迷惑。",
        "literalTranslation": "不懂军队内部事务，却干预军队行政管理，就会使士兵迷惑。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于不战而胜时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "mou-gong-13",
        "chapterId": "mou-gong",
        "order": 13,
        "original": "不知三军之权而同三军之任者，则军士疑矣。",
        "words": [
          {
            "word": "不知三军",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "之权而同",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "三军之任",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "不懂军队临机应变的权变原则，却干预将帅指挥，就会使士兵疑虑。",
        "literalTranslation": "不懂军队临机应变的权变原则，却干预将帅指挥，就会使士兵疑虑。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于不战而胜时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "三军既惑且疑，则诸侯之难至矣。是谓乱军引胜。",
        "words": [
          {
            "word": "三军既惑",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "且疑",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "则诸侯之",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "三军既迷惑又疑虑，其他诸侯的灾难就会到来。这叫扰乱自己的军队，把胜利送给敌人。",
        "literalTranslation": "三军既迷惑又疑虑，其他诸侯的灾难就会到来。这叫扰乱自己的军队，把胜利送给敌人。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于不战而胜时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "故知胜有五：知可以战与不可以战者胜；识众寡之用者胜；上下同欲者胜；以虞待不虞者胜；将能而君不御者胜。",
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
        "translation": "所以，预知胜利有五个条件：知道什么时候可以战、什么时候不可以战的人会胜；懂得兵力多寡该如何运用的人会胜；上下同心同欲的人会胜；以有准备对付无准备的人会胜；将帅有才能而君主不随意干预的人会胜。",
        "literalTranslation": "所以，预知胜利有五个条件：知道什么时候可以战、什么时候不可以战的人会胜；懂得兵力多寡该如何运用的人会胜；上下同心同欲的人会胜；以有准备对付无准备的人会胜；将帅有才能而君主不随意干预的人会胜。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "translation": "这五点，就是预知胜利的方法。",
        "literalTranslation": "这五点，就是预知胜利的方法。",
        "freeTranslation": "这句话强调：本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“不战而胜”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“不战而胜”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "故曰：知彼知己，百战不殆；不知彼而知己，一胜一负；不知彼不知己，每战必殆。",
        "words": [
          {
            "word": "故曰",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "知彼知己",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          },
          {
            "word": "百战不殆",
            "explanation": "理解这个表达时，应结合“不战而胜”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "不战而胜"
          }
        ],
        "translation": "所以说：了解敌人，也了解自己，百战都不会陷入危险；不了解敌人但了解自己，胜负各半；不了解敌人，也不了解自己，每战必定危险。",
        "literalTranslation": "所以说：了解敌人，也了解自己，百战都不会陷入危险；不了解敌人但了解自己，胜负各半；不了解敌人，也不了解自己，每战必定危险。",
        "freeTranslation": "这句话强调：判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "进入新市场、重构系统或谈判前，同时写清自身能力边界和对方约束，避免只看机会不看代价。",
        "misunderstanding": "不要只搜集对手信息，却忽略自己的资源、能力和承受边界。",
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
        "quoteLevel": "important"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "先建立不败条件",
      "区分己方可控与敌方漏洞",
      "强调胜兵先胜后战",
      "以制度保障胜利"
    ],
    "fullOriginal": "孙子曰：昔之善战者，先为不可胜，以待敌之可胜。\n不可胜在己，可胜在敌。\n故善战者，能为不可胜，不能使敌之可胜。\n故曰：胜可知，而不可为。\n不可胜者，守也；可胜者，攻也。\n守则不足，攻则有余。\n善守者，藏于九地之下；善攻者，动于九天之上，故能自保而全胜也。\n见胜不过众人之所知，非善之善者也；战胜而天下曰善，非善之善者也。\n故举秋毫不为多力，见日月不为明目，闻雷霆不为聪耳。\n古之所谓善战者，胜胜易胜者也。\n故善战者之胜也，无智名，无勇功。\n故其战胜不忒。不忒者，其所措胜，胜已败者也。\n故善战者，立于不败之地，而不失敌之败也。\n是故胜兵先胜而后求战，败兵先战而后求胜。\n善用兵者，修道而保法，故能为胜败之政。\n兵法：一曰度，二曰量，三曰数，四曰称，五曰胜。\n地生度，度生量，量生数，数生称，称生胜。\n故胜兵若以镒称铢，败兵若以铢称镒。\n胜者之战民也，若决积水于千仞之溪者，形也。",
    "sentences": [
      {
        "id": "jun-xing-1",
        "chapterId": "jun-xing",
        "order": 1,
        "original": "孙子曰：昔之善战者，先为不可胜，以待敌之可胜。",
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
        "translation": "孙子说：古代善于作战的人，首先使自己处于不可被战胜的状态，然后等待敌人出现可以被战胜的机会。",
        "literalTranslation": "孙子说：古代善于作战的人，首先使自己处于不可被战胜的状态，然后等待敌人出现可以被战胜的机会。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
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
        "translation": "不被敌人战胜，主动权在自己；能不能战胜敌人，要看敌人是否暴露破绽。",
        "literalTranslation": "不被敌人战胜，主动权在自己；能不能战胜敌人，要看敌人是否暴露破绽。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
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
        "original": "故善战者，能为不可胜，不能使敌之可胜。",
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
        "translation": "所以，善战者能够做到自己不被战胜，却不能强迫敌人一定出现可被战胜的机会。",
        "literalTranslation": "所以，善战者能够做到自己不被战胜，却不能强迫敌人一定出现可被战胜的机会。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "胜可知",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "而不可为",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "因此说：胜利可以预见，但不能凭空强求。",
        "literalTranslation": "因此说：胜利可以预见，但不能凭空强求。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "translation": "使自己不可被战胜，主要靠防守；发现敌人可以被战胜，才转入进攻。",
        "literalTranslation": "使自己不可被战胜，主要靠防守；发现敌人可以被战胜，才转入进攻。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "攻则有余",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "防守，是因为条件还不足；进攻，是因为条件已经有余。",
        "literalTranslation": "防守，是因为条件还不足；进攻，是因为条件已经有余。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "善守者，藏于九地之下；善攻者，动于九天之上，故能自保而全胜也。",
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
        "translation": "善于防守的人，像藏在深不可测的地下；善于进攻的人，像行动于高不可测的天空。所以能够保存自己，并取得完全胜利。",
        "literalTranslation": "善于防守的人，像藏在深不可测的地下；善于进攻的人，像行动于高不可测的天空。所以能够保存自己，并取得完全胜利。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "众人之所",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "看见人人都能看见的胜利机会，并不算最高明；打赢一场天下人都称赞的胜仗，也不算最高明。",
        "literalTranslation": "看见人人都能看见的胜利机会，并不算最高明；打赢一场天下人都称赞的胜仗，也不算最高明。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "不为多力",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "见日月不",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "能举起秋毫，不算力量大；能看见日月，不算眼力好；能听见雷霆，不算耳朵灵。",
        "literalTranslation": "能举起秋毫，不算力量大；能看见日月，不算眼力好；能听见雷霆，不算耳朵灵。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "古之所谓善战者，胜胜易胜者也。",
        "words": [
          {
            "word": "古之所谓",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "善战者",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "胜胜易胜",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "古人所谓善战者，是战胜那些本来就容易被战胜的敌人。",
        "literalTranslation": "古人所谓善战者，是战胜那些本来就容易被战胜的敌人。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "故善战者之胜也，无智名，无勇功。",
        "words": [
          {
            "word": "故善战者",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "之胜也",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "无智名",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "所以，善战者取得胜利，往往没有惊人的智慧名声，也没有显赫的勇武功劳。",
        "literalTranslation": "所以，善战者取得胜利，往往没有惊人的智慧名声，也没有显赫的勇武功劳。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "故其战胜不忒。不忒者，其所措胜，胜已败者也。",
        "words": [
          {
            "word": "故其战胜",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "不忒",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "不忒者",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "他的胜利不会出差错。所谓不会出差错，是因为他所采取的措施，本来就是在敌人已经显露败象时完成胜利。",
        "literalTranslation": "他的胜利不会出差错。所谓不会出差错，是因为他所采取的措施，本来就是在敌人已经显露败象时完成胜利。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "立于不败",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "所以，善战者先使自己立于不败之地，同时不放过敌人走向失败的机会。",
        "literalTranslation": "所以，善战者先使自己立于不败之地，同时不放过敌人走向失败的机会。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "先胜而后",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "求战",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "因此，胜利的军队是先具备胜利条件，然后才寻求作战；失败的军队是先贸然作战，然后才在战斗中侥幸求胜。",
        "literalTranslation": "因此，胜利的军队是先具备胜利条件，然后才寻求作战；失败的军队是先贸然作战，然后才在战斗中侥幸求胜。",
        "freeTranslation": "先让胜利条件成立，再进入竞争或冲突。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
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
        "translation": "善于用兵的人，会修明政治、维护法度，所以能够掌握胜败的主动权。",
        "literalTranslation": "善于用兵的人，会修明政治、维护法度，所以能够掌握胜败的主动权。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "一曰度",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "兵法上有五个层次：一是度量土地，二是估算容量，三是计算兵力，四是权衡强弱，五是判断胜负。",
        "literalTranslation": "兵法上有五个层次：一是度量土地，二是估算容量，三是计算兵力，四是权衡强弱，五是判断胜负。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "度生量",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "地形产生面积与距离的度量，度量产生资源容量的判断，容量产生兵力数量的估算，数量产生实力轻重的权衡，权衡之后才能判断胜负。",
        "literalTranslation": "地形产生面积与距离的度量，度量产生资源容量的判断，容量产生兵力数量的估算，数量产生实力轻重的权衡，权衡之后才能判断胜负。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "以镒称铢",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "败兵若以",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "所以，胜利的军队对失败的军队，就像用很重的镒去称很轻的铢；失败的军队对胜利的军队，就像用很轻的铢去称很重的镒。",
        "literalTranslation": "所以，胜利的军队对失败的军队，就像用很重的镒去称很轻的铢；失败的军队对胜利的军队，就像用很轻的铢去称很重的镒。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "胜者之战民也，若决积水于千仞之溪者，形也。",
        "words": [
          {
            "word": "胜者之战",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "民也",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          },
          {
            "word": "若决积水",
            "explanation": "理解这个表达时，应结合“先胜后战”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "先胜后战"
          }
        ],
        "translation": "胜利者驱使军队作战，就像积蓄的水从千仞高谷中决口而下，这就是“形”所形成的压倒性力量。",
        "literalTranslation": "胜利者驱使军队作战，就像积蓄的水从千仞高谷中决口而下，这就是“形”所形成的压倒性力量。",
        "freeTranslation": "这句话强调：本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“先胜后战”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于先胜后战时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“先胜后战”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "用组织分工治理大规模行动",
      "以奇正形成变化",
      "强调势能不是蛮力",
      "通过结构制造顺势"
    ],
    "fullOriginal": "孙子曰：凡治众如治寡，分数是也；斗众如斗寡，形名是也。\n三军之众，可使必受敌而无败者，奇正是也。\n兵之所加，如以碫投卵者，虚实是也。\n凡战者，以正合，以奇胜。\n故善出奇者，无穷如天地，不竭如江河。\n终而复始，日月是也；死而复生，四时是也。\n声不过五，五声之变，不可胜听也。\n色不过五，五色之变，不可胜观也。\n味不过五，五味之变，不可胜尝也。\n战势不过奇正，奇正之变，不可胜穷也。\n奇正相生，如循环之无端，孰能穷之哉！\n激水之疾，至于漂石者，势也。\n鸷鸟之疾，至于毁折者，节也。\n是故善战者，其势险，其节短。\n势如张弩，节如发机。\n纷纷纭纭，斗乱而不可乱也；浑浑沌沌，形圆而不可败也。\n乱生于治，怯生于勇，弱生于强。\n治乱，数也；勇怯，势也；强弱，形也。\n故善动敌者，形之，敌必从之；予之，敌必取之。\n以利动之，以卒待之。\n故善战者，求之于势，不责于人，故能择人而任势。\n任势者，其战人也，如转木石。\n木石之性，安则静，危则动，方则止，圆则行。\n故善战人之势，如转圆石于千仞之山者，势也。",
    "sentences": [
      {
        "id": "bing-shi-1",
        "chapterId": "bing-shi",
        "order": 1,
        "original": "孙子曰：凡治众如治寡，分数是也；斗众如斗寡，形名是也。",
        "words": [
          {
            "word": "孙子曰",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "凡治众如",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "治寡",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "孙子说：治理大部队能像治理小部队一样，是因为有合理的组织编制；指挥大部队作战能像指挥小部队一样，是因为有明确的信号和号令。",
        "literalTranslation": "孙子说：治理大部队能像治理小部队一样，是因为有合理的组织编制；指挥大部队作战能像指挥小部队一样，是因为有明确的信号和号令。",
        "freeTranslation": "这句话强调：本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于借势造势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-2",
        "chapterId": "bing-shi",
        "order": 2,
        "original": "三军之众，可使必受敌而无败者，奇正是也。",
        "words": [
          {
            "word": "奇正",
            "explanation": "正面常规力量与非常规变化手段。",
            "modernMapping": "组合策略"
          },
          {
            "word": "三军之众",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "可使必受",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "使全军遭遇敌人攻击而不败，靠的是“正”与“奇”的配合。",
        "literalTranslation": "使全军遭遇敌人攻击而不败，靠的是“正”与“奇”的配合。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "运营和产品打法要有稳定基本盘，也要保留可快速切换的非常规动作，例如灰度发布、侧翼渠道或差异化功能。",
        "misunderstanding": "不要迷信奇招；没有正面基本盘，奇招往往只是冒险。",
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
          "t07",
          "t14"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-3",
        "chapterId": "bing-shi",
        "order": 3,
        "original": "兵之所加，如以碫投卵者，虚实是也。",
        "words": [
          {
            "word": "虚实",
            "explanation": "强弱、空实、守备与薄弱处。",
            "modernMapping": "切入点"
          },
          {
            "word": "兵之所加",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "如以碫投",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "攻击敌人时像用石头击碎鸡蛋，靠的是避实击虚。",
        "literalTranslation": "攻击敌人时像用石头击碎鸡蛋，靠的是避实击虚。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-4",
        "chapterId": "bing-shi",
        "order": 4,
        "original": "凡战者，以正合，以奇胜。",
        "words": [
          {
            "word": "凡战者",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "以正合",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "以奇胜",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "凡是作战，通常用正兵与敌人正面接触，用奇兵决定胜负。",
        "literalTranslation": "凡是作战，通常用正兵与敌人正面接触，用奇兵决定胜负。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "运营和产品打法要有稳定基本盘，也要保留可快速切换的非常规动作，例如灰度发布、侧翼渠道或差异化功能。",
        "misunderstanding": "不要迷信奇招；没有正面基本盘，奇招往往只是冒险。",
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
          "t09",
          "t16"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-5",
        "chapterId": "bing-shi",
        "order": 5,
        "original": "故善出奇者，无穷如天地，不竭如江河。",
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
        "translation": "所以，善于出奇制胜的人，变化像天地一样无穷，像江河一样不竭。",
        "literalTranslation": "所以，善于出奇制胜的人，变化像天地一样无穷，像江河一样不竭。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要迷信奇招；没有正面基本盘，奇招往往只是冒险。",
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
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-6",
        "chapterId": "bing-shi",
        "order": 6,
        "original": "终而复始，日月是也；死而复生，四时是也。",
        "words": [
          {
            "word": "终而复始",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "日月是也",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "死而复生",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "结束之后又重新开始，就像日月运行；衰亡之后又重新发生，就像四季循环。",
        "literalTranslation": "结束之后又重新开始，就像日月运行；衰亡之后又重新发生，就像四季循环。",
        "freeTranslation": "这句话强调：本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于借势造势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t11",
          "t18"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-7",
        "chapterId": "bing-shi",
        "order": 7,
        "original": "声不过五，五声之变，不可胜听也。",
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
        "translation": "声音不过五音，但五音的变化听不尽。",
        "literalTranslation": "声音不过五音，但五音的变化听不尽。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
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
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-8",
        "chapterId": "bing-shi",
        "order": 8,
        "original": "色不过五，五色之变，不可胜观也。",
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
        "translation": "颜色不过五色，但五色的变化看不尽。",
        "literalTranslation": "颜色不过五色，但五色的变化看不尽。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
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
        "original": "味不过五，五味之变，不可胜尝也。",
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
        "translation": "味道不过五味，但五味的变化尝不尽。",
        "literalTranslation": "味道不过五味，但五味的变化尝不尽。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "xian-sheng-hou-zhan",
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
        "original": "战势不过奇正，奇正之变，不可胜穷也。",
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
        "translation": "作战态势不过奇与正两类，但奇正之间的变化无法穷尽。",
        "literalTranslation": "作战态势不过奇与正两类，但奇正之间的变化无法穷尽。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "上线、扩张或转型前先保证自己不容易崩盘，再等待对方暴露窗口，避免把希望押在好运上。",
        "misunderstanding": "不要把“先胜”理解成必胜承诺；它只是说明行动前要先创造更稳的条件。",
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
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-11",
        "chapterId": "bing-shi",
        "order": 11,
        "original": "奇正相生，如循环之无端，孰能穷之哉！",
        "words": [
          {
            "word": "奇正",
            "explanation": "正面常规力量与非常规变化手段。",
            "modernMapping": "组合策略"
          },
          {
            "word": "奇正相生",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "如循环之",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "奇与正相互转化、相互生成，就像圆环没有端点，谁能穷尽它呢？",
        "literalTranslation": "奇与正相互转化、相互生成，就像圆环没有端点，谁能穷尽它呢？",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "运营和产品打法要有稳定基本盘，也要保留可快速切换的非常规动作，例如灰度发布、侧翼渠道或差异化功能。",
        "misunderstanding": "不要迷信奇招；没有正面基本盘，奇招往往只是冒险。",
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
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-12",
        "chapterId": "bing-shi",
        "order": 12,
        "original": "激水之疾，至于漂石者，势也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "激水之疾",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "至于漂石",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "湍急的水流能漂起石头，这是“势”的力量。",
        "literalTranslation": "湍急的水流能漂起石头，这是“势”的力量。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-13",
        "chapterId": "bing-shi",
        "order": 13,
        "original": "鸷鸟之疾，至于毁折者，节也。",
        "words": [
          {
            "word": "节",
            "explanation": "力量释放的时机与节奏。",
            "modernMapping": "执行节拍"
          },
          {
            "word": "鸷鸟之疾",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "至于毁折",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "猛禽疾飞而能击毁猎物，这是“节”的力量，也就是力量集中爆发的时机。",
        "literalTranslation": "猛禽疾飞而能击毁猎物，这是“节”的力量，也就是力量集中爆发的时机。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-14",
        "chapterId": "bing-shi",
        "order": 14,
        "original": "是故善战者，其势险，其节短。",
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
        "translation": "所以，善战者形成的态势险峻有力，发动攻击的节奏短促迅猛。",
        "literalTranslation": "所以，善战者形成的态势险峻有力，发动攻击的节奏短促迅猛。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-15",
        "chapterId": "bing-shi",
        "order": 15,
        "original": "势如张弩，节如发机。",
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
        "translation": "态势像拉满的弓弩，节奏像扣动机关。",
        "literalTranslation": "态势像拉满的弓弩，节奏像扣动机关。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-16",
        "chapterId": "bing-shi",
        "order": 16,
        "original": "纷纷纭纭，斗乱而不可乱也；浑浑沌沌，形圆而不可败也。",
        "words": [
          {
            "word": "纷纷纭纭",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "斗乱而不",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "可乱也",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "战场上纷乱复杂，看似混乱而自己不能真乱；形势浑沌难辨，但阵势圆活完整而不可被击败。",
        "literalTranslation": "战场上纷乱复杂，看似混乱而自己不能真乱；形势浑沌难辨，但阵势圆活完整而不可被击败。",
        "freeTranslation": "这句话强调：本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于借势造势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "乱生于治，怯生于勇，弱生于强。",
        "words": [
          {
            "word": "乱生于治",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "怯生于勇",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "弱生于强",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "混乱可以从治理中制造出来，怯懦可以从勇敢中制造出来，弱小可以从强大中制造出来。",
        "literalTranslation": "混乱可以从治理中制造出来，怯懦可以从勇敢中制造出来，弱小可以从强大中制造出来。",
        "freeTranslation": "这句话强调：本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于借势造势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-18",
        "chapterId": "bing-shi",
        "order": 18,
        "original": "治乱，数也；勇怯，势也；强弱，形也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "治乱",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "数也",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "治与乱，取决于组织编制；勇与怯，取决于态势；强与弱，取决于外在形势的呈现。",
        "literalTranslation": "治与乱，取决于组织编制；勇与怯，取决于态势；强与弱，取决于外在形势的呈现。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t23",
          "t30"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-19",
        "chapterId": "bing-shi",
        "order": 19,
        "original": "故善动敌者，形之，敌必从之；予之，敌必取之。",
        "words": [
          {
            "word": "故善动敌",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "形之",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "敌必从之",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "所以，善于调动敌人的人，会故意显露某种形态，敌人必定跟随反应；给敌人某种诱饵，敌人必定来取。",
        "literalTranslation": "所以，善于调动敌人的人，会故意显露某种形态，敌人必定跟随反应；给敌人某种诱饵，敌人必定来取。",
        "freeTranslation": "这句话强调：本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于借势造势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-20",
        "chapterId": "bing-shi",
        "order": 20,
        "original": "以利动之，以卒待之。",
        "words": [
          {
            "word": "以利动之",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "以卒待之",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "用利益调动敌人，用伏兵等待敌人。",
        "literalTranslation": "用利益调动敌人，用伏兵等待敌人。",
        "freeTranslation": "这句话强调：本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于借势造势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t25",
          "t02"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-21",
        "chapterId": "bing-shi",
        "order": 21,
        "original": "故善战者，求之于势，不责于人，故能择人而任势。",
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
        "translation": "所以，善战者追求形成有利态势，而不是苛求每个人都超常发挥。因此他能够选择合适的人，并让他们借助态势发挥作用。",
        "literalTranslation": "所以，善战者追求形成有利态势，而不是苛求每个人都超常发挥。因此他能够选择合适的人，并让他们借助态势发挥作用。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t26",
          "t03"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-22",
        "chapterId": "bing-shi",
        "order": 22,
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
        "translation": "善于运用态势的人，指挥士兵作战，就像转动木头和石头。",
        "literalTranslation": "善于运用态势的人，指挥士兵作战，就像转动木头和石头。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t27",
          "t04"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "bing-shi-23",
        "chapterId": "bing-shi",
        "order": 23,
        "original": "木石之性，安则静，危则动，方则止，圆则行。",
        "words": [
          {
            "word": "木石之性",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "安则静",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "危则动",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "木石的特性是：放在平稳处就静止，放在险峻处就滚动；方形的容易停住，圆形的容易滚动。",
        "literalTranslation": "木石的特性是：放在平稳处就静止，放在险峻处就滚动；方形的容易停住，圆形的容易滚动。",
        "freeTranslation": "这句话强调：本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“借势造势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于借势造势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "shang-bing-fa-mou",
          "bu-zhan-er-qu-ren"
        ],
        "relatedCaseIds": [
          "chang-ping",
          "brand-position"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "bing-shi-24",
        "chapterId": "bing-shi",
        "order": 24,
        "original": "故善战人之势，如转圆石于千仞之山者，势也。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "故善战人",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          },
          {
            "word": "之势",
            "explanation": "理解这个表达时，应结合“借势造势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "借势造势"
          }
        ],
        "translation": "所以，善于使军队形成作战态势，就像把圆石从千仞高山上滚下去，这就是“势”。",
        "literalTranslation": "所以，善于使军队形成作战态势，就像把圆石从千仞高山上滚下去，这就是“势”。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“借势造势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t29",
          "t06"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "抢占主动位置",
      "控制节奏而不被牵引",
      "攻击不防守处",
      "避实击虚"
    ],
    "fullOriginal": "孙子曰：凡先处战地而待敌者佚，后处战地而趋战者劳。\n故善战者，致人而不致于人。\n能使敌人自至者，利之也；能使敌人不得至者，害之也。\n故敌佚能劳之，饱能饥之，安能动之。\n出其所不趋，趋其所不意。\n行千里而不劳者，行于无人之地也。\n攻而必取者，攻其所不守也。\n守而必固者，守其所必攻也。\n故善攻者，敌不知其所守；善守者，敌不知其所攻。\n微乎微乎，至于无形；神乎神乎，至于无声，故能为敌之司命。\n进而不可御者，冲其虚也；退而不可追者，速而不可及也。\n故我欲战，敌虽高垒深沟，不得不与我战者，攻其所必救也。\n我不欲战，虽画地而守之，敌不得与我战者，乖其所之也。\n故形人而我无形，则我专而敌分。\n我专为一，敌分为十，是以十攻其一也，则我众而敌寡。\n能以众击寡者，则吾之所与战者约矣。\n吾所与战之地不可知，不可知，则敌所备者多。\n敌所备者多，则吾所与战者寡矣。\n故备前则后寡，备后则前寡，备左则右寡，备右则左寡，无所不备，则无所不寡。\n寡者，备人者也；众者，使人备己者也。\n故知战之地，知战之日，则可千里而会战。\n不知战地，不知战日，则左不能救右，右不能救左，前不能救后，后不能救前，而况远者数十里，近者数里乎！\n以吾度之，越人之兵虽多，亦奚益于胜败哉！\n故曰：胜可为也。敌虽众，可使无斗。\n故策之而知得失之计，作之而知动静之理，形之而知死生之地，角之而知有余不足之处。\n故形兵之极，至于无形。\n无形，则深间不能窥，智者不能谋。\n因形而错胜于众，众不能知。\n人皆知我所以胜之形，而莫知吾所以制胜之形。\n故其战胜不复，而应形于无穷。\n夫兵形象水。水之形，避高而趋下；兵之形，避实而击虚。\n水因地而制流，兵因敌而制胜。\n故兵无常势，水无常形；能因敌变化而取胜者，谓之神。\n故五行无常胜，四时无常位，日有短长，月有死生。",
    "sentences": [
      {
        "id": "xu-shi-1",
        "chapterId": "xu-shi",
        "order": 1,
        "original": "孙子曰：凡先处战地而待敌者佚，后处战地而趋战者劳。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "孙子曰",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "凡先处战",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "孙子说：凡是先到战场等待敌人的人安逸，后到战场匆忙赶来作战的人疲劳。",
        "literalTranslation": "孙子说：凡是先到战场等待敌人的人安逸，后到战场匆忙赶来作战的人疲劳。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "致人而不",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，善战者能调动敌人，而不被敌人调动。",
        "literalTranslation": "所以，善战者能调动敌人，而不被敌人调动。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "自至者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "利之也",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "能使敌人自己前来的，是用利益引诱他；能使敌人不能到达的，是用威胁阻止他。",
        "literalTranslation": "能使敌人自己前来的，是用利益引诱他；能使敌人不能到达的，是用威胁阻止他。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "劳之",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "饱能饥之",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，敌人安逸，就设法使他疲劳；敌人粮足，就设法使他饥饿；敌人安稳，就设法使他行动。",
        "literalTranslation": "所以，敌人安逸，就设法使他疲劳；敌人粮足，就设法使他饥饿；敌人安稳，就设法使他行动。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "出其所不趋，趋其所不意。",
        "words": [
          {
            "word": "出其所不",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "趋其所不",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "要从敌人来不及赶到的地方出击，奔向敌人意想不到的方向。",
        "literalTranslation": "要从敌人来不及赶到的地方出击，奔向敌人意想不到的方向。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t11",
          "t18"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-6",
        "chapterId": "xu-shi",
        "order": 6,
        "original": "行千里而不劳者，行于无人之地也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "行千里而",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "不劳者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "行军千里而不疲劳，是因为走在敌人没有设防的地区。",
        "literalTranslation": "行军千里而不疲劳，是因为走在敌人没有设防的地区。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t12",
          "t19"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-7",
        "chapterId": "xu-shi",
        "order": 7,
        "original": "攻而必取者，攻其所不守也。",
        "words": [
          {
            "word": "攻而必取",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "攻其所不",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "守也",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "进攻必定能夺取，是因为攻击敌人没有防守的地方。",
        "literalTranslation": "进攻必定能夺取，是因为攻击敌人没有防守的地方。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "守而必固者，守其所必攻也。",
        "words": [
          {
            "word": "守而必固",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "守其所必",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "攻也",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "防守必定稳固，是因为守住敌人必定要攻击的地方。",
        "literalTranslation": "防守必定稳固，是因为守住敌人必定要攻击的地方。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "故善攻者，敌不知其所守；善守者，敌不知其所攻。",
        "words": [
          {
            "word": "故善攻者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "敌不知其",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "所守",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，善于进攻的人，使敌人不知道该守哪里；善于防守的人，使敌人不知道该攻哪里。",
        "literalTranslation": "所以，善于进攻的人，使敌人不知道该守哪里；善于防守的人，使敌人不知道该攻哪里。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t15",
          "t22"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-10",
        "chapterId": "xu-shi",
        "order": 10,
        "original": "微乎微乎，至于无形；神乎神乎，至于无声，故能为敌之司命。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "微乎微乎",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "至于无形",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "微妙啊，微妙到没有形迹；神奇啊，神奇到没有声息，所以能够掌握敌人的命运。",
        "literalTranslation": "微妙啊，微妙到没有形迹；神奇啊，神奇到没有声息，所以能够掌握敌人的命运。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-11",
        "chapterId": "xu-shi",
        "order": 11,
        "original": "进而不可御者，冲其虚也；退而不可追者，速而不可及也。",
        "words": [
          {
            "word": "进而不可",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "御者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "冲其虚也",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "前进而敌人不能抵挡，是因为冲击了敌人的空虚处；后退而敌人不能追上，是因为行动迅速，敌人来不及追赶。",
        "literalTranslation": "前进而敌人不能抵挡，是因为冲击了敌人的空虚处；后退而敌人不能追上，是因为行动迅速，敌人来不及追赶。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
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
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-12",
        "chapterId": "xu-shi",
        "order": 12,
        "original": "故我欲战，敌虽高垒深沟，不得不与我战者，攻其所必救也。",
        "words": [
          {
            "word": "攻其所必救",
            "explanation": "攻击对方必须救援的关键点。",
            "modernMapping": "关键节点"
          },
          {
            "word": "故我欲战",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "敌虽高垒",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，我想要作战，敌人即使高垒深沟，也不得不出来与我作战，是因为我攻击了他必须救援的地方。",
        "literalTranslation": "所以，我想要作战，敌人即使高垒深沟，也不得不出来与我作战，是因为我攻击了他必须救援的地方。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "gong-qi-suo-bi-jiu",
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
        "original": "我不欲战，虽画地而守之，敌不得与我战者，乖其所之也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "我不欲战",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "虽画地而",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "我不想作战，即使只是划地而守，敌人也不能迫使我作战，是因为我改变了敌人进攻的方向。",
        "literalTranslation": "我不想作战，即使只是划地而守，敌人也不能迫使我作战，是因为我改变了敌人进攻的方向。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-14",
        "chapterId": "xu-shi",
        "order": 14,
        "original": "故形人而我无形，则我专而敌分。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "故形人而",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "我无形",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，让敌人暴露形态，而我自己不暴露形态，那么我方就能集中，敌人就会分散。",
        "literalTranslation": "所以，让敌人暴露形态，而我自己不暴露形态，那么我方就能集中，敌人就会分散。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "我专为一，敌分为十，是以十攻其一也，则我众而敌寡。",
        "words": [
          {
            "word": "我专为一",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "敌分为十",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "是以十攻",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "我方集中为一，敌人分散为十，我就可以用十分力量攻击敌人一分力量，于是我方相对成众，敌方相对成寡。",
        "literalTranslation": "我方集中为一，敌人分散为十，我就可以用十分力量攻击敌人一分力量，于是我方相对成众，敌方相对成寡。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-16",
        "chapterId": "xu-shi",
        "order": 16,
        "original": "能以众击寡者，则吾之所与战者约矣。",
        "words": [
          {
            "word": "能以众击",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "寡者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "则吾之所",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "能够用众击寡，那么与我交战的敌人就少了。",
        "literalTranslation": "能够用众击寡，那么与我交战的敌人就少了。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-17",
        "chapterId": "xu-shi",
        "order": 17,
        "original": "吾所与战之地不可知，不可知，则敌所备者多。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "吾所与战",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "之地不可",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "敌人不知道我要在哪里作战，就必须多处防备。",
        "literalTranslation": "敌人不知道我要在哪里作战，就必须多处防备。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-18",
        "chapterId": "xu-shi",
        "order": 18,
        "original": "敌所备者多，则吾所与战者寡矣。",
        "words": [
          {
            "word": "敌所备者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "则吾所与",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "战者寡矣",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "敌人防备的地方多，那么真正与我作战的兵力就少。",
        "literalTranslation": "敌人防备的地方多，那么真正与我作战的兵力就少。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-19",
        "chapterId": "xu-shi",
        "order": 19,
        "original": "故备前则后寡，备后则前寡，备左则右寡，备右则左寡，无所不备，则无所不寡。",
        "words": [
          {
            "word": "故备前则",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "后寡",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "备后则前",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，防备前方，后方就空虚；防备后方，前方就空虚；防备左边，右边就空虚；防备右边，左边就空虚；处处防备，就处处兵力不足。",
        "literalTranslation": "所以，防备前方，后方就空虚；防备后方，前方就空虚；防备左边，右边就空虚；防备右边，左边就空虚；处处防备，就处处兵力不足。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "寡者，备人者也；众者，使人备己者也。",
        "words": [
          {
            "word": "寡者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "备人者也",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "众者",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "兵力少，是因为被迫防备别人；兵力多，是因为迫使别人防备自己。",
        "literalTranslation": "兵力少，是因为被迫防备别人；兵力多，是因为迫使别人防备自己。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-21",
        "chapterId": "xu-shi",
        "order": 21,
        "original": "故知战之地，知战之日，则可千里而会战。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "故知战之",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "知战之日",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "如果知道作战地点，知道作战日期，即使相距千里也可以赶来会战。",
        "literalTranslation": "如果知道作战地点，知道作战日期，即使相距千里也可以赶来会战。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-22",
        "chapterId": "xu-shi",
        "order": 22,
        "original": "不知战地，不知战日，则左不能救右，右不能救左，前不能救后，后不能救前，而况远者数十里，近者数里乎！",
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
        "translation": "如果不知道作战地点，也不知道作战日期，那么左边不能救右边，右边不能救左边，前方不能救后方，后方不能救前方，更何况远的相隔几十里，近的也相隔几里呢？",
        "literalTranslation": "如果不知道作战地点，也不知道作战日期，那么左边不能救右边，右边不能救左边，前方不能救后方，后方不能救前方，更何况远的相隔几十里，近的也相隔几里呢？",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t28",
          "t05"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-23",
        "chapterId": "xu-shi",
        "order": 23,
        "original": "以吾度之，越人之兵虽多，亦奚益于胜败哉！",
        "words": [
          {
            "word": "以吾度之",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "越人之兵",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "虽多",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "按我的估计，越国兵力即使很多，对胜败又有什么帮助呢？",
        "literalTranslation": "按我的估计，越国兵力即使很多，对胜败又有什么帮助呢？",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t29",
          "t06"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-24",
        "chapterId": "xu-shi",
        "order": 24,
        "original": "故曰：胜可为也。敌虽众，可使无斗。",
        "words": [
          {
            "word": "故曰",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "胜可为也",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "敌虽众",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以说：胜利是可以创造的。敌人兵力虽多，也可以让他无法发挥整体战斗力。",
        "literalTranslation": "所以说：胜利是可以创造的。敌人兵力虽多，也可以让他无法发挥整体战斗力。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t30",
          "t07"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-25",
        "chapterId": "xu-shi",
        "order": 25,
        "original": "故策之而知得失之计，作之而知动静之理，形之而知死生之地，角之而知有余不足之处。",
        "words": [
          {
            "word": "死生之地",
            "explanation": "关系生存、失败代价与责任边界的处境。",
            "modernMapping": "风险边界"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "因此，要通过谋算来了解敌人计划的得失；通过扰动来了解敌人的行动规律；通过显示形态来判断敌人的生地死地；通过试探交锋来知道敌人哪里有余、哪里不足。",
        "literalTranslation": "因此，要通过谋算来了解敌人计划的得失；通过扰动来了解敌人的行动规律；通过显示形态来判断敌人的生地死地；通过试探交锋来知道敌人哪里有余、哪里不足。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t01",
          "t08"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-26",
        "chapterId": "xu-shi",
        "order": 26,
        "original": "故形兵之极，至于无形。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "故形兵之",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "至于无形",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，用兵布势达到最高境界，就是让自己不显露固定形态。",
        "literalTranslation": "所以，用兵布势达到最高境界，就是让自己不显露固定形态。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "xu-shi-27",
        "chapterId": "xu-shi",
        "order": 27,
        "original": "无形，则深间不能窥，智者不能谋。",
        "words": [
          {
            "word": "无形",
            "explanation": "不让对方看清自己的真实部署。",
            "modernMapping": "信息隐藏"
          },
          {
            "word": "则深间不",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "能窥",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "没有固定形态，那么深藏的间谍也无法窥探，聪明的谋士也无法谋划。",
        "literalTranslation": "没有固定形态，那么深藏的间谍也无法窥探，聪明的谋士也无法谋划。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t03",
          "t10"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-28",
        "chapterId": "xu-shi",
        "order": 28,
        "original": "因形而错胜于众，众不能知。",
        "words": [
          {
            "word": "因形而错",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "胜于众",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "众不能知",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "根据敌情变化而把胜利摆在众人面前，众人却不知道其中奥妙。",
        "literalTranslation": "根据敌情变化而把胜利摆在众人面前，众人却不知道其中奥妙。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t04",
          "t11"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-29",
        "chapterId": "xu-shi",
        "order": 29,
        "original": "人皆知我所以胜之形，而莫知吾所以制胜之形。",
        "words": [
          {
            "word": "人皆知我",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "所以胜之",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "而莫知吾",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "人们都知道我获胜时表现出来的形态，却不知道我为什么能制造这种胜利形态。",
        "literalTranslation": "人们都知道我获胜时表现出来的形态，却不知道我为什么能制造这种胜利形态。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t05",
          "t12"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-30",
        "chapterId": "xu-shi",
        "order": 30,
        "original": "故其战胜不复，而应形于无穷。",
        "words": [
          {
            "word": "故其战胜",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "不复",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "而应形于",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，胜利的方法不会重复，而是随着形势变化无穷应对。",
        "literalTranslation": "所以，胜利的方法不会重复，而是随着形势变化无穷应对。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "夫兵形象水。水之形，避高而趋下；兵之形，避实而击虚。",
        "words": [
          {
            "word": "夫兵形象",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "水之形",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "避高而趋",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "用兵的形态就像水。水的流动，是避开高处而流向低处；用兵的规律，是避开敌人的坚实处而攻击其空虚处。",
        "literalTranslation": "用兵的形态就像水。水的流动，是避开高处而流向低处；用兵的规律，是避开敌人的坚实处而攻击其空虚处。",
        "freeTranslation": "不要在对方最强的位置硬拼，要找对方薄弱且必须回应的地方。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
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
        "quoteLevel": "classic"
      },
      {
        "id": "xu-shi-32",
        "chapterId": "xu-shi",
        "order": 32,
        "original": "水因地而制流，兵因敌而制胜。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "水因地而",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "制流",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "水根据地势决定流向，用兵根据敌情决定取胜方式。",
        "literalTranslation": "水根据地势决定流向，用兵根据敌情决定取胜方式。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t08",
          "t15"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xu-shi-33",
        "chapterId": "xu-shi",
        "order": 33,
        "original": "故兵无常势，水无常形；能因敌变化而取胜者，谓之神。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "故兵无常",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "水无常形",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "所以，用兵没有固定不变的态势，就像水没有固定不变的形状。能够根据敌人变化而取胜，才称得上神妙。",
        "literalTranslation": "所以，用兵没有固定不变的态势，就像水没有固定不变的形状。能够根据敌人变化而取胜，才称得上神妙。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "shi-neng",
          "zhi-tian-zhi-di",
          "bu-zhan-er-qu-ren"
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
        "id": "xu-shi-34",
        "chapterId": "xu-shi",
        "order": 34,
        "original": "故五行无常胜，四时无常位，日有短长，月有死生。",
        "words": [
          {
            "word": "故五行无",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "常胜",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          },
          {
            "word": "四时无常",
            "explanation": "理解这个表达时，应结合“虚实变化”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "虚实变化"
          }
        ],
        "translation": "五行之间没有永远胜出的某一行，四季也没有固定不变的位置；太阳有长短变化，月亮有盈亏死生。",
        "literalTranslation": "五行之间没有永远胜出的某一行，四季也没有固定不变的位置；太阳有长短变化，月亮有盈亏死生。",
        "freeTranslation": "这句话强调：本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“虚实变化”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于虚实变化时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“虚实变化”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t10",
          "t17"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "说明军争最难",
      "以迂为直以患为利",
      "强调外部关系与情报",
      "管理气势与心理"
    ],
    "fullOriginal": "孙子曰：凡用兵之法，将受命于君，合军聚众，交和而舍，莫难于军争。\n军争之难者，以迂为直，以患为利。\n故迂其途，而诱之以利，后人发，先人至，此知迂直之计者也。\n故军争为利，军争为危。\n举军而争利则不及，委军而争利则辎重捐。\n是故卷甲而趋，日夜不处，倍道兼行，百里而争利，则擒三将军；劲者先，疲者后，其法十一而至。\n五十里而争利，则蹶上将军，其法半至。\n三十里而争利，则三分之二至。\n是故军无辎重则亡，无粮食则亡，无委积则亡。\n故不知诸侯之谋者，不能豫交。\n不知山林、险阻、沮泽之形者，不能行军。\n不用乡导者，不能得地利。\n故兵以诈立，以利动，以分合为变者也。\n故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。\n掠乡分众，廓地分利，悬权而动。\n先知迂直之计者胜，此军争之法也。\n《军政》曰：“言不相闻，故为金鼓；视不相见，故为旌旗。”\n夫金鼓旌旗者，所以一人之耳目也。\n人既专一，则勇者不得独进，怯者不得独退，此用众之法也。\n故夜战多金鼓，昼战多旌旗，所以变人之耳目也。\n故三军可夺气，将军可夺心。\n是故朝气锐，昼气惰，暮气归。\n故善用兵者，避其锐气，击其惰归，此治气者也。\n以治待乱，以静待哗，此治心者也。\n以近待远，以佚待劳，以饱待饥，此治力者也。\n无邀正正之旗，无击堂堂之阵，此治变者也。\n故用兵之法：高陵勿向，背丘勿逆，佯北勿从，锐卒勿攻，饵兵勿食，归师勿遏，围师必阙，穷寇勿迫。\n此用兵之法也。",
    "sentences": [
      {
        "id": "jun-zheng-1",
        "chapterId": "jun-zheng",
        "order": 1,
        "original": "孙子曰：凡用兵之法，将受命于君，合军聚众，交和而舍，莫难于军争。",
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
        "translation": "孙子说：凡是用兵，将帅接受君主命令，集合军队，组织部众，与敌军接触并安营对峙，其中最困难的是争夺有利先机。",
        "literalTranslation": "孙子说：凡是用兵，将帅接受君主命令，集合军队，组织部众，与敌军接触并安营对峙，其中最困难的是争夺有利先机。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以迂为直",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "争夺先机的困难在于：要把迂回变成直达，把不利变成有利。",
        "literalTranslation": "争夺先机的困难在于：要把迂回变成直达，把不利变成有利。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "跨部门项目要把路径、节奏和补给算清楚：有些绕路反而更快，有些看似快进会丢掉关键资源。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "而诱之以",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "所以，故意绕远路，同时用利益引诱敌人，使自己虽然后出发，却比敌人先到达。这就是懂得迂回与直接之间转化的计谋。",
        "literalTranslation": "所以，故意绕远路，同时用利益引诱敌人，使自己虽然后出发，却比敌人先到达。这就是懂得迂回与直接之间转化的计谋。",
        "freeTranslation": "这句话强调：虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "coreMeaning": "虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "modernApplication": "做产品、投资或组织变革前，先列出可验证的有利条件和不利条件，用证据数量决定是否推进。",
        "misunderstanding": "不要把“诡道”理解成无底线欺骗；它强调的是信息控制、虚实变化和因势制权，不能突破法律与伦理边界。",
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
        "original": "故军争为利，军争为危。",
        "words": [
          {
            "word": "军争",
            "explanation": "争夺先机、位置和主动权。",
            "modernMapping": "节奏竞争"
          },
          {
            "word": "故军争为",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "军争为危",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "争夺先机可以带来利益，也可能带来危险。",
        "literalTranslation": "争夺先机可以带来利益，也可能带来危险。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "跨部门项目要把路径、节奏和补给算清楚：有些绕路反而更快，有些看似快进会丢掉关键资源。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "利则不及",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "委军而争",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "如果全军携带全部装备去争夺利益，就可能来不及到达；如果轻装疾进去争夺利益，就会丢弃辎重。",
        "literalTranslation": "如果全军携带全部装备去争夺利益，就可能来不及到达；如果轻装疾进去争夺利益，就会丢弃辎重。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "是故卷甲而趋，日夜不处，倍道兼行，百里而争利，则擒三将军；劲者先，疲者后，其法十一而至。",
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
        "translation": "所以，卷起铠甲急行军，昼夜不停，加倍赶路，走百里去争夺利益，三军将领都有可能被擒。强壮的士兵先到，疲弱的士兵落后，通常只有十分之一能到达。",
        "literalTranslation": "所以，卷起铠甲急行军，昼夜不停，加倍赶路，走百里去争夺利益，三军将领都有可能被擒。强壮的士兵先到，疲弱的士兵落后，通常只有十分之一能到达。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "五十里而争利，则蹶上将军，其法半至。",
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
        "translation": "走五十里去争夺利益，上将军可能受挫，通常只有一半人能到达。",
        "literalTranslation": "走五十里去争夺利益，上将军可能受挫，通常只有一半人能到达。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-8",
        "chapterId": "jun-zheng",
        "order": 8,
        "original": "三十里而争利，则三分之二至。",
        "words": [
          {
            "word": "三十里而",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "争利",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "则三分之",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "走三十里去争夺利益，通常也只有三分之二能到达。",
        "literalTranslation": "走三十里去争夺利益，通常也只有三分之二能到达。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-9",
        "chapterId": "jun-zheng",
        "order": 9,
        "original": "是故军无辎重则亡，无粮食则亡，无委积则亡。",
        "words": [
          {
            "word": "是故军无",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "辎重则亡",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "无粮食则",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "所以，军队没有辎重就会灭亡，没有粮食就会灭亡，没有物资储备就会灭亡。",
        "literalTranslation": "所以，军队没有辎重就会灭亡，没有粮食就会灭亡，没有物资储备就会灭亡。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-10",
        "chapterId": "jun-zheng",
        "order": 10,
        "original": "故不知诸侯之谋者，不能豫交。",
        "words": [
          {
            "word": "故不知诸",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "侯之谋者",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "不能豫交",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "不了解诸侯各方的谋划，就不能预先进行外交结盟。",
        "literalTranslation": "不了解诸侯各方的谋划，就不能预先进行外交结盟。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "不知山林、险阻、沮泽之形者，不能行军。",
        "words": [
          {
            "word": "行军",
            "explanation": "行军驻扎和观察敌情的方法。",
            "modernMapping": "现场判断"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "不了解山林、险阻、沼泽等地形，就不能行军。",
        "literalTranslation": "不了解山林、险阻、沼泽等地形，就不能行军。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-12",
        "chapterId": "jun-zheng",
        "order": 12,
        "original": "不用乡导者，不能得地利。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "不用乡导",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "不能得地",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "不用当地向导，就不能获得地利。",
        "literalTranslation": "不用当地向导，就不能获得地利。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-13",
        "chapterId": "jun-zheng",
        "order": 13,
        "original": "故兵以诈立，以利动，以分合为变者也。",
        "words": [
          {
            "word": "故兵以诈",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以利动",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以分合为",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "所以，用兵是靠谋略立足，因利益而行动，根据兵力分散与集中来变化。",
        "literalTranslation": "所以，用兵是靠谋略立足，因利益而行动，根据兵力分散与集中来变化。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-14",
        "chapterId": "jun-zheng",
        "order": 14,
        "original": "故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。",
        "words": [
          {
            "word": "故其疾如",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "其徐如林",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "侵掠如火",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "行动迅速时像风，行动舒缓时像林，侵袭掠取时像火，静止不动时像山，隐藏难测时像阴云，发动攻击时像雷霆震动。",
        "literalTranslation": "行动迅速时像风，行动舒缓时像林，侵袭掠取时像火，静止不动时像山，隐藏难测时像阴云，发动攻击时像雷霆震动。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "跨部门项目要把路径、节奏和补给算清楚：有些绕路反而更快，有些看似快进会丢掉关键资源。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-15",
        "chapterId": "jun-zheng",
        "order": 15,
        "original": "掠乡分众，廓地分利，悬权而动。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "掠乡分众",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "廓地分利",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "掠取乡邑，要分兵行动；开拓土地，要分配利益；权衡利害，然后行动。",
        "literalTranslation": "掠取乡邑，要分兵行动；开拓土地，要分配利益；权衡利害，然后行动。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-16",
        "chapterId": "jun-zheng",
        "order": 16,
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
        "translation": "先懂得迂回与直接之间转化的人会胜利，这就是军争的方法。",
        "literalTranslation": "先懂得迂回与直接之间转化的人会胜利，这就是军争的方法。",
        "freeTranslation": "关键决策前要取得真实可靠的信息来源。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t23",
          "t30"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "jun-zheng-17",
        "chapterId": "jun-zheng",
        "order": 17,
        "original": "《军政》曰：“言不相闻，故为金鼓；视不相见，故为旌旗。”",
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
        "translation": "《军政》说：“说话听不见，所以设置金鼓；远处看不见，所以设置旌旗。”",
        "literalTranslation": "《军政》说：“说话听不见，所以设置金鼓；远处看不见，所以设置旌旗。”",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "夫金鼓旌旗者，所以一人之耳目也。",
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
        "translation": "金鼓和旌旗，是用来统一士卒耳目、统一行动的。",
        "literalTranslation": "金鼓和旌旗，是用来统一士卒耳目、统一行动的。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "人既专一，则勇者不得独进，怯者不得独退，此用众之法也。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "人既专一",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "则勇者不",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "众人既然行动统一，那么勇敢者不能独自冒进，怯懦者也不能独自后退。这就是指挥大军的方法。",
        "literalTranslation": "众人既然行动统一，那么勇敢者不能独自冒进，怯懦者也不能独自后退。这就是指挥大军的方法。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t26",
          "t03"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-20",
        "chapterId": "jun-zheng",
        "order": 20,
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
        "translation": "所以，夜战多用金鼓，昼战多用旌旗，是为了改变和统一士兵的听觉视觉。",
        "literalTranslation": "所以，夜战多用金鼓，昼战多用旌旗，是为了改变和统一士兵的听觉视觉。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "故三军可夺气，将军可夺心。",
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
        "translation": "所以，三军的士气可以被夺取，将帅的心志也可以被动摇。",
        "literalTranslation": "所以，三军的士气可以被夺取，将帅的心志也可以被动摇。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-22",
        "chapterId": "jun-zheng",
        "order": 22,
        "original": "是故朝气锐，昼气惰，暮气归。",
        "words": [
          {
            "word": "是故朝气",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "昼气惰",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "暮气归",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "早晨士气锐盛，白天士气松懈，傍晚士兵思归。",
        "literalTranslation": "早晨士气锐盛，白天士气松懈，傍晚士兵思归。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "谈判、销售和管理中要观察对方节奏与情绪，在对方锐气最盛时避开，在疲惫和犹豫时推进。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "故善用兵者，避其锐气，击其惰归，此治气者也。",
        "words": [
          {
            "word": "故善用兵",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "避其锐气",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "击其惰归",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "所以，善于用兵的人，会避开敌人锐气正盛的时候，攻击敌人士气懈怠、思归的时候。这是掌握士气的方法。",
        "literalTranslation": "所以，善于用兵的人，会避开敌人锐气正盛的时候，攻击敌人士气懈怠、思归的时候。这是掌握士气的方法。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-24",
        "chapterId": "jun-zheng",
        "order": 24,
        "original": "以治待乱，以静待哗，此治心者也。",
        "words": [
          {
            "word": "以治待乱",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以静待哗",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "此治心者",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "用治理严整对待敌人的混乱，用镇静对待敌人的喧哗，这是掌握军心的方法。",
        "literalTranslation": "用治理严整对待敌人的混乱，用镇静对待敌人的喧哗，这是掌握军心的方法。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zhi-ji-zhi-bi",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "startup-giant",
          "team-alignment"
        ],
        "relatedTrainingIds": [
          "t01",
          "t08"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-25",
        "chapterId": "jun-zheng",
        "order": 25,
        "original": "以近待远，以佚待劳，以饱待饥，此治力者也。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "以近待远",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "以佚待劳",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "用靠近战场对待远道而来的敌人，用安逸对待疲劳，用饱足对待饥饿，这是掌握体力的方法。",
        "literalTranslation": "用靠近战场对待远道而来的敌人，用安逸对待疲劳，用饱足对待饥饿，这是掌握体力的方法。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于争夺主动权时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t02",
          "t09"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-26",
        "chapterId": "jun-zheng",
        "order": 26,
        "original": "无邀正正之旗，无击堂堂之阵，此治变者也。",
        "words": [
          {
            "word": "无邀正正",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "之旗",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "无击堂堂",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "不要迎击旗帜整齐、阵容严整的敌军，不要攻击阵势堂堂的敌人，这是掌握变化的方法。",
        "literalTranslation": "不要迎击旗帜整齐、阵容严整的敌军，不要攻击阵势堂堂的敌人，这是掌握变化的方法。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "运营和产品打法要有稳定基本盘，也要保留可快速切换的非常规动作，例如灰度发布、侧翼渠道或差异化功能。",
        "misunderstanding": "不要迷信奇招；没有正面基本盘，奇招往往只是冒险。",
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
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jun-zheng-27",
        "chapterId": "jun-zheng",
        "order": 27,
        "original": "故用兵之法：高陵勿向，背丘勿逆，佯北勿从，锐卒勿攻，饵兵勿食，归师勿遏，围师必阙，穷寇勿迫。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "故用兵之",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "高陵勿向",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "所以，用兵的原则是：敌人占据高陵，不要仰攻；敌人背靠丘陵，不要正面逆击；敌人假装败退，不要贸然追击；敌人精锐部队，不要硬攻；敌人投下诱饵，不要贪取；敌人归国之师，不要截断其退路；包围敌人，要留出缺口；敌人已到绝境，不要过分逼迫。",
        "literalTranslation": "所以，用兵的原则是：敌人占据高陵，不要仰攻；敌人背靠丘陵，不要正面逆击；敌人假装败退，不要贸然追击；敌人精锐部队，不要硬攻；敌人投下诱饵，不要贪取；敌人归国之师，不要截断其退路；包围敌人，要留出缺口；敌人已到绝境，不要过分逼迫。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t04",
          "t11"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jun-zheng-28",
        "chapterId": "jun-zheng",
        "order": 28,
        "original": "此用兵之法也。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "此用兵之",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          },
          {
            "word": "法也",
            "explanation": "理解这个表达时，应结合“争夺主动权”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "争夺主动权"
          }
        ],
        "translation": "这些都是用兵的方法。",
        "literalTranslation": "这些都是用兵的方法。",
        "freeTranslation": "这句话强调：本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“争夺主动权”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“争夺主动权”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t05",
          "t12"
        ],
        "quoteLevel": "normal"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "说明因地因势选择",
      "提出有所不为",
      "利害并观",
      "识别领导者五种危险偏向"
    ],
    "fullOriginal": "孙子曰：凡用兵之法，将受命于君，合军聚众。\n圮地无舍，衢地交合，绝地无留，围地则谋，死地则战。\n途有所不由，军有所不击，城有所不攻，地有所不争，君命有所不受。\n故将通于九变之利者，知用兵矣。\n将不通于九变之利者，虽知地形，不能得地之利矣。\n治兵不知九变之术，虽知五利，不能得人之用矣。\n是故智者之虑，必杂于利害。\n杂于利而务可信也，杂于害而患可解也。\n是故屈诸侯者以害，役诸侯者以业，趋诸侯者以利。\n故用兵之法，无恃其不来，恃吾有以待也；无恃其不攻，恃吾有所不可攻也。\n故将有五危：必死，可杀也；必生，可虏也；忿速，可侮也；廉洁，可辱也；爱民，可烦也。\n凡此五者，将之过也，用兵之灾也。\n覆军杀将，必以五危，不可不察也。",
    "sentences": [
      {
        "id": "jiu-bian-1",
        "chapterId": "jiu-bian",
        "order": 1,
        "original": "孙子曰：凡用兵之法，将受命于君，合军聚众。",
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
        "translation": "孙子说：凡是用兵，将帅接受君主命令，集合军队，组织部众。",
        "literalTranslation": "孙子说：凡是用兵，将帅接受君主命令，集合军队，组织部众。",
        "freeTranslation": "这句话强调：本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“灵活应变”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "圮地无舍，衢地交合，绝地无留，围地则谋，死地则战。",
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
        "translation": "在难以通行的地区不要久留；在四通八达的地区要结交诸侯；进入绝地不要停留；陷入围地就要用计谋；进入死地就要拼死作战。",
        "literalTranslation": "在难以通行的地区不要久留；在四通八达的地区要结交诸侯；进入绝地不要停留；陷入围地就要用计谋；进入死地就要拼死作战。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng",
          "xian-sheng-hou-zhan"
        ],
        "relatedCaseIds": [
          "price-war",
          "resource-fight"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-3",
        "chapterId": "jiu-bian",
        "order": 3,
        "original": "途有所不由，军有所不击，城有所不攻，地有所不争，君命有所不受。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "途有所不",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "军有所不",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "有些道路不能走，有些敌军不能打，有些城池不能攻，有些土地不能争，有些君命也不能接受。",
        "literalTranslation": "有些道路不能走，有些敌军不能打，有些城池不能攻，有些土地不能争，有些君命也不能接受。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“灵活应变”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "bu-ke-sheng-zai-ji",
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
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-4",
        "chapterId": "jiu-bian",
        "order": 4,
        "original": "故将通于九变之利者，知用兵矣。",
        "words": [
          {
            "word": "九变",
            "explanation": "因地、因势灵活调整的变化原则。",
            "modernMapping": "适应性"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "通",
            "explanation": "双方都可往来的地形。",
            "modernMapping": "开放市场"
          }
        ],
        "translation": "所以，将帅如果通晓各种临机变化的利益，就懂得用兵了。",
        "literalTranslation": "所以，将帅如果通晓各种临机变化的利益，就懂得用兵了。",
        "freeTranslation": "这句话强调：真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "coreMeaning": "真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把灵活变通变成反复摇摆；变化必须受目标、成本和风险约束。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
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
        "original": "将不通于九变之利者，虽知地形，不能得地之利矣。",
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
        "translation": "如果不懂九变之利，即使知道地形，也不能真正获得地利。",
        "literalTranslation": "如果不懂九变之利，即使知道地形，也不能真正获得地利。",
        "freeTranslation": "这句话强调：判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把灵活变通变成反复摇摆；变化必须受目标、成本和风险约束。",
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
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-6",
        "chapterId": "jiu-bian",
        "order": 6,
        "original": "治兵不知九变之术，虽知五利，不能得人之用矣。",
        "words": [
          {
            "word": "九变",
            "explanation": "因地、因势灵活调整的变化原则。",
            "modernMapping": "适应性"
          },
          {
            "word": "治兵不知",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "九变之术",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "治理军队而不懂临机变化的方法，即使知道五种有利条件，也不能充分发挥士兵作用。",
        "literalTranslation": "治理军队而不懂临机变化的方法，即使知道五种有利条件，也不能充分发挥士兵作用。",
        "freeTranslation": "这句话强调：真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "coreMeaning": "真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "modernApplication": "风险管理不能只列机会，也要列最坏情况、领导者偏差和备用方案，把“对方不会来”改成“来了怎么办”。",
        "misunderstanding": "不要把灵活变通变成反复摇摆；变化必须受目标、成本和风险约束。",
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
          "t14",
          "t21"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-7",
        "chapterId": "jiu-bian",
        "order": 7,
        "original": "是故智者之虑，必杂于利害。",
        "words": [
          {
            "word": "利害",
            "explanation": "利益与风险必须同时纳入判断。",
            "modernMapping": "风险收益"
          },
          {
            "word": "是故智者",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "之虑",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "所以，智慧之人的考虑，一定要把利与害结合起来看。",
        "literalTranslation": "所以，智慧之人的考虑，一定要把利与害结合起来看。",
        "freeTranslation": "这句话强调：真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "coreMeaning": "真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "modernApplication": "风险管理不能只列机会，也要列最坏情况、领导者偏差和备用方案，把“对方不会来”改成“来了怎么办”。",
        "misunderstanding": "不要把灵活变通变成反复摇摆；变化必须受目标、成本和风险约束。",
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
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-8",
        "chapterId": "jiu-bian",
        "order": 8,
        "original": "杂于利而务可信也，杂于害而患可解也。",
        "words": [
          {
            "word": "杂于利而",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "务可信也",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "杂于害而",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "在有利中考虑不利，事情才可以顺利实现；在不利中看到有利，祸患才可以化解。",
        "literalTranslation": "在有利中考虑不利，事情才可以顺利实现；在不利中看到有利，祸患才可以化解。",
        "freeTranslation": "这句话强调：本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于灵活应变时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“灵活应变”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-9",
        "chapterId": "jiu-bian",
        "order": 9,
        "original": "是故屈诸侯者以害，役诸侯者以业，趋诸侯者以利。",
        "words": [
          {
            "word": "是故屈诸",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "侯者以害",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "役诸侯者",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "所以，要使诸侯屈服，可以用危害威慑他；要役使诸侯，可以用事务牵制他；要驱使诸侯行动，可以用利益引诱他。",
        "literalTranslation": "所以，要使诸侯屈服，可以用危害威慑他；要役使诸侯，可以用事务牵制他；要驱使诸侯行动，可以用利益引诱他。",
        "freeTranslation": "这句话强调：本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于灵活应变时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“灵活应变”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-10",
        "chapterId": "jiu-bian",
        "order": 10,
        "original": "故用兵之法，无恃其不来，恃吾有以待也；无恃其不攻，恃吾有所不可攻也。",
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
        "translation": "用兵的原则是：不要寄希望于敌人不来，而要依靠我方已有准备来等待敌人；不要寄希望于敌人不攻，而要依靠我方有不可被攻破的条件。",
        "literalTranslation": "用兵的原则是：不要寄希望于敌人不来，而要依靠我方已有准备来等待敌人；不要寄希望于敌人不攻，而要依靠我方有不可被攻破的条件。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把灵活变通变成反复摇摆；变化必须受目标、成本和风险约束。",
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
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-11",
        "chapterId": "jiu-bian",
        "order": 11,
        "original": "故将有五危：必死，可杀也；必生，可虏也；忿速，可侮也；廉洁，可辱也；爱民，可烦也。",
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
        "translation": "将帅有五种危险性格：只知死拼的人，可能被杀；只求活命的人，可能被俘；急躁易怒的人，可能被侮辱激怒；过分爱惜名节的人，可能被羞辱牵动；过分爱民的人，可能被烦扰拖累。",
        "literalTranslation": "将帅有五种危险性格：只知死拼的人，可能被杀；只求活命的人，可能被俘；急躁易怒的人，可能被侮辱激怒；过分爱惜名节的人，可能被羞辱牵动；过分爱民的人，可能被烦扰拖累。",
        "freeTranslation": "这句话强调：真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "coreMeaning": "真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“灵活应变”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-bian-12",
        "chapterId": "jiu-bian",
        "order": 12,
        "original": "凡此五者，将之过也，用兵之灾也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "凡此五者",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          },
          {
            "word": "将之过也",
            "explanation": "理解这个表达时，应结合“灵活应变”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "灵活应变"
          }
        ],
        "translation": "这五种，都是将帅的过失，是用兵的灾害。",
        "literalTranslation": "这五种，都是将帅的过失，是用兵的灾害。",
        "freeTranslation": "这句话强调：本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“灵活应变”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“灵活应变”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-bian-13",
        "chapterId": "jiu-bian",
        "order": 13,
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
        "translation": "军队覆灭、将帅被杀，必定与这五种危险有关，不能不认真考察。",
        "literalTranslation": "军队覆灭、将帅被杀，必定与这五种危险有关，不能不认真考察。",
        "freeTranslation": "凡是代价足以影响生死存亡的行动，都必须先审慎评估。",
        "coreMeaning": "真正的灵活不是随意变化，而是把收益、风险和领导偏差一起纳入判断。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“灵活应变”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t21",
          "t28"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "说明行军处置原则",
      "观察环境与敌情迹象",
      "从言辞动作判断意图",
      "反对盲目增兵"
    ],
    "fullOriginal": "孙子曰：凡处军相敌，绝山依谷，视生处高，战隆无登，此处山之军也。\n绝水必远水；客绝水而来，勿迎之于水内，令半济而击之，利。\n欲战者，无附于水而迎客；视生处高，无迎水流，此处水上之军也。\n绝斥泽，惟亟去无留；若交军于斥泽之中，必依水草而背众树，此处斥泽之军也。\n平陆处易，而右背高，前死后生，此处平陆之军也。\n凡此四军之利，黄帝之所以胜四帝也。\n凡军好高而恶下，贵阳而贱阴，养生而处实，军无百疾，是谓必胜。\n丘陵堤防，必处其阳，而右背之。此兵之利，地之助也。\n上雨，水沫至，欲涉者，待其定也。\n凡地有绝涧、天井、天牢、天罗、天陷、天隙，必亟去之，勿近也。\n吾远之，敌近之；吾迎之，敌背之。\n军行有险阻、潢井、葭苇、山林、翳荟者，必谨覆索之，此伏奸之所处也。\n敌近而静者，恃其险也。\n远而挑战者，欲人之进也。\n其所居易者，利也。\n众树动者，来也。\n众草多障者，疑也。\n鸟起者，伏也。\n兽骇者，覆也。\n尘高而锐者，车来也。\n卑而广者，徒来也。\n散而条达者，樵采也。\n少而往来者，营军也。\n辞卑而益备者，进也。\n辞强而进驱者，退也。\n轻车先出居其侧者，陈也。\n无约而请和者，谋也。\n奔走而陈兵者，期也。\n半进半退者，诱也。\n杖而立者，饥也。\n汲而先饮者，渴也。\n见利而不进者，劳也。\n鸟集者，虚也。\n夜呼者，恐也。\n军扰者，将不重也。\n旌旗动者，乱也。\n吏怒者，倦也。\n粟马肉食，军无悬缻，不返其舍者，穷寇也。\n谆谆翕翕，徐与人言者，失众也。\n数赏者，窘也。\n数罚者，困也。\n先暴而后畏其众者，不精之至也。\n来委谢者，欲休息也。\n兵怒而相迎，久而不合，又不相去，必谨察之。\n兵非贵益多也，惟无武进，足以并力、料敌、取人而已。\n夫惟无虑而易敌者，必擒于人。\n卒未亲附而罚之，则不服，不服则难用也。\n卒已亲附而罚不行，则不可用也。\n故令之以文，齐之以武，是谓必取。\n令素行以教其民，则民服。\n令不素行以教其民，则民不服。\n令素行者，与众相得也。",
    "sentences": [
      {
        "id": "xing-jun-1",
        "chapterId": "xing-jun",
        "order": 1,
        "original": "孙子曰：凡处军相敌，绝山依谷，视生处高，战隆无登，此处山之军也。",
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
        "translation": "孙子说：凡是驻军并观察敌情，经过山地时要靠近谷地，选择向阳高处驻扎；如果敌人在高处，不要仰攻。这是山地用兵的方法。",
        "literalTranslation": "孙子说：凡是驻军并观察敌情，经过山地时要靠近谷地，选择向阳高处驻扎；如果敌人在高处，不要仰攻。这是山地用兵的方法。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "绝水必远水；客绝水而来，勿迎之于水内，令半济而击之，利。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "绝水必远",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "客绝水而",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "渡过河流后，一定要远离水边驻扎；敌人渡水来战，不要在水中迎击，而要等他渡到一半时攻击，这样有利。",
        "literalTranslation": "渡过河流后，一定要远离水边驻扎；敌人渡水来战，不要在水中迎击，而要等他渡到一半时攻击，这样有利。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "欲战者，无附于水而迎客；视生处高，无迎水流，此处水上之军也。",
        "words": [
          {
            "word": "欲战者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "无附于水",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而迎客",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "如果想与敌人作战，不要紧靠水边迎敌；要选择向阳高处，不要迎着水流方向作战。这是水边用兵的方法。",
        "literalTranslation": "如果想与敌人作战，不要紧靠水边迎敌；要选择向阳高处，不要迎着水流方向作战。这是水边用兵的方法。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-4",
        "chapterId": "xing-jun",
        "order": 4,
        "original": "绝斥泽，惟亟去无留；若交军于斥泽之中，必依水草而背众树，此处斥泽之军也。",
        "words": [
          {
            "word": "绝斥泽",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "惟亟去无",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "若交军于",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "经过盐碱沼泽地，要尽快离开，不要停留；如果不得不在沼泽地与敌人交战，一定要靠近水草，背靠树林。这是沼泽地用兵的方法。",
        "literalTranslation": "经过盐碱沼泽地，要尽快离开，不要停留；如果不得不在沼泽地与敌人交战，一定要靠近水草，背靠树林。这是沼泽地用兵的方法。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-5",
        "chapterId": "xing-jun",
        "order": 5,
        "original": "平陆处易，而右背高，前死后生，此处平陆之军也。",
        "words": [
          {
            "word": "平陆处易",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而右背高",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "前死后生",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "在平原上，要选择平坦便利之处，右后方依托高地，前方不利于敌、后方利于己。这是平原用兵的方法。",
        "literalTranslation": "在平原上，要选择平坦便利之处，右后方依托高地，前方不利于敌、后方利于己。这是平原用兵的方法。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-6",
        "chapterId": "xing-jun",
        "order": 6,
        "original": "凡此四军之利，黄帝之所以胜四帝也。",
        "words": [
          {
            "word": "凡此四军",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "之利",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "黄帝之所",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "这四种处军之利，就是古代黄帝能够战胜四方帝王的原因。",
        "literalTranslation": "这四种处军之利，就是古代黄帝能够战胜四方帝王的原因。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t15",
          "t22"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-7",
        "chapterId": "xing-jun",
        "order": 7,
        "original": "凡军好高而恶下，贵阳而贱阴，养生而处实，军无百疾，是谓必胜。",
        "words": [
          {
            "word": "凡军好高",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而恶下",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "贵阳而贱",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "凡是驻军，都喜欢高处而厌恶低处，重视向阳而轻视阴湿，靠近生养便利之地，驻扎在坚实之处，这样军队就不会发生多种疾病，这叫具备取胜条件。",
        "literalTranslation": "凡是驻军，都喜欢高处而厌恶低处，重视向阳而轻视阴湿，靠近生养便利之地，驻扎在坚实之处，这样军队就不会发生多种疾病，这叫具备取胜条件。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
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
          "t16",
          "t23"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-8",
        "chapterId": "xing-jun",
        "order": 8,
        "original": "丘陵堤防，必处其阳，而右背之。此兵之利，地之助也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "丘陵堤防",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "必处其阳",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "在丘陵堤防之地，一定要驻扎在向阳面，并让右后方有所依托。这是用兵的便利，也是地形的帮助。",
        "literalTranslation": "在丘陵堤防之地，一定要驻扎在向阳面，并让右后方有所依托。这是用兵的便利，也是地形的帮助。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-9",
        "chapterId": "xing-jun",
        "order": 9,
        "original": "上雨，水沫至，欲涉者，待其定也。",
        "words": [
          {
            "word": "上雨",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "水沫至",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "欲涉者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "上游下雨，水流带着泡沫而来，如果要涉水，应等水势平稳后再渡。",
        "literalTranslation": "上游下雨，水流带着泡沫而来，如果要涉水，应等水势平稳后再渡。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-10",
        "chapterId": "xing-jun",
        "order": 10,
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
        "translation": "凡是遇到绝涧、天井、天牢、天罗、天陷、天隙等险恶地形，必须迅速离开，不要靠近。",
        "literalTranslation": "凡是遇到绝涧、天井、天牢、天罗、天陷、天隙等险恶地形，必须迅速离开，不要靠近。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t19",
          "t26"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-11",
        "chapterId": "xing-jun",
        "order": 11,
        "original": "吾远之，敌近之；吾迎之，敌背之。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "吾远之",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "敌近之",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "我要远离这些地方，让敌人靠近；我要面对这些地形，使敌人背靠这些地形。",
        "literalTranslation": "我要远离这些地方，让敌人靠近；我要面对这些地形，使敌人背靠这些地形。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "军行有险阻、潢井、葭苇、山林、翳荟者，必谨覆索之，此伏奸之所处也。",
        "words": [
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          },
          {
            "word": "军行有险",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "潢井",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "行军时遇到险阻、池沼、芦苇、山林、草木茂密之处，必须谨慎反复搜索，因为这些地方容易隐藏伏兵和奸细。",
        "literalTranslation": "行军时遇到险阻、池沼、芦苇、山林、草木茂密之处，必须谨慎反复搜索，因为这些地方容易隐藏伏兵和奸细。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-13",
        "chapterId": "xing-jun",
        "order": 13,
        "original": "敌近而静者，恃其险也。",
        "words": [
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          },
          {
            "word": "敌近而静",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "恃其险也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌人距离很近却安静，是依仗险要地形。",
        "literalTranslation": "敌人距离很近却安静，是依仗险要地形。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t22",
          "t29"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-14",
        "chapterId": "xing-jun",
        "order": 14,
        "original": "远而挑战者，欲人之进也。",
        "words": [
          {
            "word": "远",
            "explanation": "距离过远、挑战困难。",
            "modernMapping": "高摩擦距离"
          },
          {
            "word": "远而挑战",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "欲人之进",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌人距离很远却挑战，是想诱使我前进。",
        "literalTranslation": "敌人距离很远却挑战，是想诱使我前进。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-15",
        "chapterId": "xing-jun",
        "order": 15,
        "original": "其所居易者，利也。",
        "words": [
          {
            "word": "其所居易",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "利也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌人驻扎在平坦便利的地方，是因为那里对他有利。",
        "literalTranslation": "敌人驻扎在平坦便利的地方，是因为那里对他有利。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
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
        "quoteLevel": "important"
      },
      {
        "id": "xing-jun-16",
        "chapterId": "xing-jun",
        "order": 16,
        "original": "众树动者，来也。",
        "words": [
          {
            "word": "众树动者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "来也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "树林中许多树木摇动，是敌军来了。",
        "literalTranslation": "树林中许多树木摇动，是敌军来了。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "众草多障者，疑也。",
        "words": [
          {
            "word": "众草多障",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "疑也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "草丛中有许多遮障，是敌人在设置疑兵。",
        "literalTranslation": "草丛中有许多遮障，是敌人在设置疑兵。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "鸟起者，伏也。",
        "words": [
          {
            "word": "鸟起者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "伏也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "鸟突然飞起，是下面有伏兵。",
        "literalTranslation": "鸟突然飞起，是下面有伏兵。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "兽骇者，覆也。",
        "words": [
          {
            "word": "兽骇者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "覆也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "野兽受惊奔逃，是敌人大举突袭。",
        "literalTranslation": "野兽受惊奔逃，是敌人大举突袭。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "尘高而锐者，车来也。",
        "words": [
          {
            "word": "尘高而锐",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "车来也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "尘土高而尖，是战车来了。",
        "literalTranslation": "尘土高而尖，是战车来了。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
      },
      {
        "id": "xing-jun-21",
        "chapterId": "xing-jun",
        "order": 21,
        "original": "卑而广者，徒来也。",
        "words": [
          {
            "word": "卑而广者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "徒来也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "尘土低而宽，是步兵来了。",
        "literalTranslation": "尘土低而宽，是步兵来了。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-22",
        "chapterId": "xing-jun",
        "order": 22,
        "original": "散而条达者，樵采也。",
        "words": [
          {
            "word": "散而条达",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "樵采也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "尘土分散而细长，是砍柴采草的人。",
        "literalTranslation": "尘土分散而细长，是砍柴采草的人。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t01",
          "t08"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-23",
        "chapterId": "xing-jun",
        "order": 23,
        "original": "少而往来者，营军也。",
        "words": [
          {
            "word": "少而往来",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "营军也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "尘土少而来往不定，是敌人在扎营。",
        "literalTranslation": "尘土少而来往不定，是敌人在扎营。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t02",
          "t09"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-24",
        "chapterId": "xing-jun",
        "order": 24,
        "original": "辞卑而益备者，进也。",
        "words": [
          {
            "word": "辞卑而益",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "备者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "进也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌人言辞谦卑却加强戒备，是准备进攻。",
        "literalTranslation": "敌人言辞谦卑却加强戒备，是准备进攻。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-25",
        "chapterId": "xing-jun",
        "order": 25,
        "original": "辞强而进驱者，退也。",
        "words": [
          {
            "word": "辞强而进",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "驱者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "退也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌人言辞强硬且做出前进姿态，是准备退却。",
        "literalTranslation": "敌人言辞强硬且做出前进姿态，是准备退却。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-26",
        "chapterId": "xing-jun",
        "order": 26,
        "original": "轻车先出居其侧者，陈也。",
        "words": [
          {
            "word": "轻车先出",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "居其侧者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "陈也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "轻车先出并停在两侧，是在列阵。",
        "literalTranslation": "轻车先出并停在两侧，是在列阵。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t05",
          "t12"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-27",
        "chapterId": "xing-jun",
        "order": 27,
        "original": "无约而请和者，谋也。",
        "words": [
          {
            "word": "无约而请",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "和者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "谋也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "没有约定却请求讲和，是另有阴谋。",
        "literalTranslation": "没有约定却请求讲和，是另有阴谋。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-28",
        "chapterId": "xing-jun",
        "order": 28,
        "original": "奔走而陈兵者，期也。",
        "words": [
          {
            "word": "奔走而陈",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "兵者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "期也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌人奔走忙乱而陈兵列阵，是约期决战。",
        "literalTranslation": "敌人奔走忙乱而陈兵列阵，是约期决战。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t07",
          "t14"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-29",
        "chapterId": "xing-jun",
        "order": 29,
        "original": "半进半退者，诱也。",
        "words": [
          {
            "word": "半进半退",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "诱也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌人半进半退，是诱我上钩。",
        "literalTranslation": "敌人半进半退，是诱我上钩。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-30",
        "chapterId": "xing-jun",
        "order": 30,
        "original": "杖而立者，饥也。",
        "words": [
          {
            "word": "杖而立者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "饥也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "士兵倚杖而立，是饥饿。",
        "literalTranslation": "士兵倚杖而立，是饥饿。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-31",
        "chapterId": "xing-jun",
        "order": 31,
        "original": "汲而先饮者，渴也。",
        "words": [
          {
            "word": "汲而先饮",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "渴也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "打水的人自己先喝，是口渴。",
        "literalTranslation": "打水的人自己先喝，是口渴。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "xing-jun-32",
        "chapterId": "xing-jun",
        "order": 32,
        "original": "见利而不进者，劳也。",
        "words": [
          {
            "word": "见利而不",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "进者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "劳也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "看见利益却不前进，是疲劳。",
        "literalTranslation": "看见利益却不前进，是疲劳。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "li-hai-bing-guan",
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
        "id": "xing-jun-33",
        "chapterId": "xing-jun",
        "order": 33,
        "original": "鸟集者，虚也。",
        "words": [
          {
            "word": "鸟集者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "虚也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "鸟群聚集，是敌营空虚。",
        "literalTranslation": "鸟群聚集，是敌营空虚。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
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
        "id": "xing-jun-34",
        "chapterId": "xing-jun",
        "order": 34,
        "original": "夜呼者，恐也。",
        "words": [
          {
            "word": "夜呼者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "恐也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "夜间惊呼，是恐惧。",
        "literalTranslation": "夜间惊呼，是恐惧。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "xing-jun-35",
        "chapterId": "xing-jun",
        "order": 35,
        "original": "军扰者，将不重也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "军扰者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "将不重也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "军营扰乱，是将帅不稳重。",
        "literalTranslation": "军营扰乱，是将帅不稳重。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
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
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-36",
        "chapterId": "xing-jun",
        "order": 36,
        "original": "旌旗动者，乱也。",
        "words": [
          {
            "word": "旌旗",
            "explanation": "古代传递军令的视觉信号。",
            "modernMapping": "协同标识"
          },
          {
            "word": "旌旗动者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "乱也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "旌旗摇动混乱，是队伍混乱。",
        "literalTranslation": "旌旗摇动混乱，是队伍混乱。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "多人协作要建立统一信号，例如里程碑、状态面板和升级机制，避免勇者冒进、谨慎者掉队。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-37",
        "chapterId": "xing-jun",
        "order": 37,
        "original": "吏怒者，倦也。",
        "words": [
          {
            "word": "吏怒者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "倦也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "军吏发怒，是士卒疲倦。",
        "literalTranslation": "军吏发怒，是士卒疲倦。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "危机决策中先问是否有明确收益、能否达成目标、是否真正危险，避免被愤怒或焦虑驱动。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-38",
        "chapterId": "xing-jun",
        "order": 38,
        "original": "粟马肉食，军无悬缻，不返其舍者，穷寇也。",
        "words": [
          {
            "word": "粟马肉食",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "军无悬缻",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "不返其舍",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "用粮食喂马、杀牲畜吃肉，军中不再悬挂炊具，士兵不返回营舍，这是敌人准备拼死一战。",
        "literalTranslation": "用粮食喂马、杀牲畜吃肉，军中不再悬挂炊具，士兵不返回营舍，这是敌人准备拼死一战。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "xing-jun-39",
        "chapterId": "xing-jun",
        "order": 39,
        "original": "谆谆翕翕，徐与人言者，失众也。",
        "words": [
          {
            "word": "谆谆翕翕",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "徐与人言",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "失众也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "低声下气、反复与士卒说话，是将帅失去众心。",
        "literalTranslation": "低声下气、反复与士卒说话，是将帅失去众心。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "xing-jun-40",
        "chapterId": "xing-jun",
        "order": 40,
        "original": "数赏者，窘也。",
        "words": [
          {
            "word": "数赏者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "窘也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "频繁赏赐，是处境困窘。",
        "literalTranslation": "频繁赏赐，是处境困窘。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "xing-jun-41",
        "chapterId": "xing-jun",
        "order": 41,
        "original": "数罚者，困也。",
        "words": [
          {
            "word": "数罚者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "困也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "频繁惩罚，是军队困难。",
        "literalTranslation": "频繁惩罚，是军队困难。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "xing-jun-42",
        "chapterId": "xing-jun",
        "order": 42,
        "original": "先暴而后畏其众者，不精之至也。",
        "words": [
          {
            "word": "先暴而后",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "畏其众者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "不精之至",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "先粗暴对待士卒，后来又害怕士卒，这是最不精明的表现。",
        "literalTranslation": "先粗暴对待士卒，后来又害怕士卒，这是最不精明的表现。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-43",
        "chapterId": "xing-jun",
        "order": 43,
        "original": "来委谢者，欲休息也。",
        "words": [
          {
            "word": "来委谢者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "欲休息也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "派人送礼谢罪，是想休兵喘息。",
        "literalTranslation": "派人送礼谢罪，是想休兵喘息。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "xing-jun-44",
        "chapterId": "xing-jun",
        "order": 44,
        "original": "兵怒而相迎，久而不合，又不相去，必谨察之。",
        "words": [
          {
            "word": "兵怒而相",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "久而不合",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "又不相去",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "敌军愤怒地迎来，却久久不交战，又不离去，必须谨慎观察。",
        "literalTranslation": "敌军愤怒地迎来，却久久不交战，又不离去，必须谨慎观察。",
        "freeTranslation": "这句话强调：长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
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
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-45",
        "chapterId": "xing-jun",
        "order": 45,
        "original": "兵非贵益多也，惟无武进，足以并力、料敌、取人而已。",
        "words": [
          {
            "word": "兵非贵益",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "多也",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "惟无武进",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "兵力并不是越多越好，只要不轻率冒进，能够集中力量、判断敌情、取得人心就可以。",
        "literalTranslation": "兵力并不是越多越好，只要不轻率冒进，能够集中力量、判断敌情、取得人心就可以。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "xing-jun-46",
        "chapterId": "xing-jun",
        "order": 46,
        "original": "夫惟无虑而易敌者，必擒于人。",
        "words": [
          {
            "word": "夫惟无虑",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而易敌者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "必擒于人",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "那些没有深思熟虑而轻敌的人，必定被敌人擒获。",
        "literalTranslation": "那些没有深思熟虑而轻敌的人，必定被敌人擒获。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "xing-jun-47",
        "chapterId": "xing-jun",
        "order": 47,
        "original": "卒未亲附而罚之，则不服，不服则难用也。",
        "words": [
          {
            "word": "卒未亲附",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而罚之",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "则不服",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "士卒还没有亲近归附就惩罚他们，他们就不会服从；不服从，就难以使用。",
        "literalTranslation": "士卒还没有亲近归附就惩罚他们，他们就不会服从；不服从，就难以使用。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "xing-jun-48",
        "chapterId": "xing-jun",
        "order": 48,
        "original": "卒已亲附而罚不行，则不可用也。",
        "words": [
          {
            "word": "卒已亲附",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "而罚不行",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "则不可用",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "士卒已经亲近归附，而惩罚不能执行，也不能使用。",
        "literalTranslation": "士卒已经亲近归附，而惩罚不能执行，也不能使用。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "xing-jun-49",
        "chapterId": "xing-jun",
        "order": 49,
        "original": "故令之以文，齐之以武，是谓必取。",
        "words": [
          {
            "word": "故令之以",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "齐之以武",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "是谓必取",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "所以，要用文德教化他们，用军法整齐他们，这样才能必定取胜。",
        "literalTranslation": "所以，要用文德教化他们，用军法整齐他们，这样才能必定取胜。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "xing-jun-50",
        "chapterId": "xing-jun",
        "order": 50,
        "original": "令素行以教其民，则民服。",
        "words": [
          {
            "word": "令素行以",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "教其民",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "则民服",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "平时命令一贯执行，再用来教导士卒，士卒就服从。",
        "literalTranslation": "平时命令一贯执行，再用来教导士卒，士卒就服从。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
      },
      {
        "id": "xing-jun-51",
        "chapterId": "xing-jun",
        "order": 51,
        "original": "令不素行以教其民，则民不服。",
        "words": [
          {
            "word": "令不素行",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "以教其民",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "则民不服",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "平时命令不能执行，再用来教导士卒，士卒就不服。",
        "literalTranslation": "平时命令不能执行，再用来教导士卒，士卒就不服。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t30",
          "t07"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "xing-jun-52",
        "chapterId": "xing-jun",
        "order": 52,
        "original": "令素行者，与众相得也。",
        "words": [
          {
            "word": "令素行者",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          },
          {
            "word": "与众相得",
            "explanation": "理解这个表达时，应结合“环境判断”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "环境判断"
          }
        ],
        "translation": "命令一贯能够执行，说明将帅与众人相处得当。",
        "literalTranslation": "命令一贯能够执行，说明将帅与众人相处得当。",
        "freeTranslation": "这句话强调：本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“环境判断”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于环境判断时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“环境判断”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bu-ke-sheng-zai-ji",
          "zheng-qi"
        ],
        "relatedCaseIds": [
          "niche-product",
          "real-decision-maker"
        ],
        "relatedTrainingIds": [
          "t01",
          "t08"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "分类地形",
      "说明不同条件不同策略",
      "地形是辅助条件",
      "知天知地才能持续取胜"
    ],
    "fullOriginal": "孙子曰：地形有通者，有挂者，有支者，有隘者，有险者，有远者。\n我可以往，彼可以来，曰通。\n通形者，先居高阳，利粮道，以战则利。\n可以往，难以返，曰挂。\n挂形者，敌无备，出而胜之；敌若有备，出而不胜，难以返，不利。\n我出而不利，彼出而不利，曰支。\n支形者，敌虽利我，我无出也；引而去之，令敌半出而击之，利。\n隘形者，我先居之，必盈之以待敌。\n若敌先居之，盈而勿从，不盈而从之。\n险形者，我先居之，必居高阳以待敌。\n若敌先居之，引而去之，勿从也。\n远形者，势均，难以挑战，战而不利。\n凡此六者，地之道也，将之至任，不可不察也。\n故兵有走者，有弛者，有陷者，有崩者，有乱者，有北者。\n凡此六者，非天之灾，将之过也。\n夫势均，以一击十，曰走。\n卒强吏弱，曰弛。\n吏强卒弱，曰陷。\n大吏怒而不服，遇敌怼而自战，将不知其能，曰崩。\n将弱不严，教道不明，吏卒无常，陈兵纵横，曰乱。\n将不能料敌，以少合众，以弱击强，兵无选锋，曰北。\n凡此六者，败之道也，将之至任，不可不察也。\n夫地形者，兵之助也。\n料敌制胜，计险阨远近，上将之道也。\n知此而用战者必胜，不知此而用战者必败。\n故战道必胜，主曰无战，必战可也；战道不胜，主曰必战，无战可也。\n故进不求名，退不避罪，唯人是保，而利合于主，国之宝也。\n视卒如婴儿，故可与之赴深溪。\n视卒如爱子，故可与之俱死。\n厚而不能使，爱而不能令，乱而不能治，譬若骄子，不可用也。\n知吾卒之可以击，而不知敌之不可击，胜之半也。\n知敌之可击，而不知吾卒之不可以击，胜之半也。\n知敌之可击，知吾卒之可以击，而不知地形之不可以战，胜之半也。\n故知兵者，动而不迷，举而不穷。\n故曰：知彼知己，胜乃不殆；知天知地，胜乃可全。",
    "sentences": [
      {
        "id": "di-xing-1",
        "chapterId": "di-xing",
        "order": 1,
        "original": "孙子曰：地形有通者，有挂者，有支者，有隘者，有险者，有远者。",
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
        "translation": "孙子说：地形有六种：通地、挂地、支地、隘地、险地、远地。",
        "literalTranslation": "孙子说：地形有六种：通地、挂地、支地、隘地、险地、远地。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "彼可以来",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "我可以去，敌人也可以来，叫通地。",
        "literalTranslation": "我可以去，敌人也可以来，叫通地。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "translation": "在通地作战，应先占据向阳高地，并保持粮道畅通，这样作战就有利。",
        "literalTranslation": "在通地作战，应先占据向阳高地，并保持粮道畅通，这样作战就有利。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "难以返",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "可以前进，但难以返回，叫挂地。",
        "literalTranslation": "可以前进，但难以返回，叫挂地。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "挂形者，敌无备，出而胜之；敌若有备，出而不胜，难以返，不利。",
        "words": [
          {
            "word": "挂",
            "explanation": "进入容易返回困难的地形。",
            "modernMapping": "退出成本"
          },
          {
            "word": "挂形者",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "敌无备",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "在挂地作战，如果敌人没有防备，就可以出击取胜；如果敌人有防备，出击不能胜，又难以退回，就不利。",
        "literalTranslation": "在挂地作战，如果敌人没有防备，就可以出击取胜；如果敌人有防备，出击不能胜，又难以退回，就不利。",
        "freeTranslation": "这句话强调：虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "coreMeaning": "虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "彼出而不",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "我出击不利，敌人出击也不利，叫支地。",
        "literalTranslation": "我出击不利，敌人出击也不利，叫支地。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "支形者，敌虽利我，我无出也；引而去之，令敌半出而击之，利。",
        "words": [
          {
            "word": "支",
            "explanation": "双方出击都不利的地形。",
            "modernMapping": "僵持局面"
          },
          {
            "word": "支形者",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "敌虽利我",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "在支地作战，敌人即使用利益引诱我，我也不要出击；应引兵离开，诱使敌人出到一半再攻击，这样有利。",
        "literalTranslation": "在支地作战，敌人即使用利益引诱我，我也不要出击；应引兵离开，诱使敌人出到一半再攻击，这样有利。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "我先居之",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "在隘地，如果我先占据，一定要用兵力充满隘口来等待敌人。",
        "literalTranslation": "在隘地，如果我先占据，一定要用兵力充满隘口来等待敌人。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "盈而勿从",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "不盈而从",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "如果敌人先占据隘口，并且已经充满兵力，就不要跟进；如果敌人没有充满隘口，可以进攻。",
        "literalTranslation": "如果敌人先占据隘口，并且已经充满兵力，就不要跟进；如果敌人没有充满隘口，可以进攻。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "险形者，我先居之，必居高阳以待敌。",
        "words": [
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          },
          {
            "word": "险形者",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "我先居之",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "在险地，如果我先占据，一定要占据高处向阳之地等待敌人。",
        "literalTranslation": "在险地，如果我先占据，一定要占据高处向阳之地等待敌人。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "做渠道、市场或组织设计时，先识别进入难度、退出成本、瓶颈和距离摩擦，再决定打法。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "若敌先居之，引而去之，勿从也。",
        "words": [
          {
            "word": "若敌先居",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "引而去之",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "勿从也",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "如果敌人先占据险地，就要引兵离开，不要跟随进攻。",
        "literalTranslation": "如果敌人先占据险地，就要引兵离开，不要跟随进攻。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-12",
        "chapterId": "di-xing",
        "order": 12,
        "original": "远形者，势均，难以挑战，战而不利。",
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
        "translation": "在远地，如果双方势均力敌，远道挑战困难，勉强作战不利。",
        "literalTranslation": "在远地，如果双方势均力敌，远道挑战困难，勉强作战不利。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-13",
        "chapterId": "di-xing",
        "order": 13,
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
        "translation": "这六种，是地形的基本规律，是将帅最重要的责任，不能不认真考察。",
        "literalTranslation": "这六种，是地形的基本规律，是将帅最重要的责任，不能不认真考察。",
        "freeTranslation": "凡是代价足以影响生死存亡的行动，都必须先审慎评估。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-14",
        "chapterId": "di-xing",
        "order": 14,
        "original": "故兵有走者，有弛者，有陷者，有崩者，有乱者，有北者。",
        "words": [
          {
            "word": "故兵有走",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "有弛者",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "有陷者",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "军队失败有六种情况：走、弛、陷、崩、乱、北。",
        "literalTranslation": "军队失败有六种情况：走、弛、陷、崩、乱、北。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "凡此六者，非天之灾，将之过也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "这六种不是天灾，都是将帅的过失。",
        "literalTranslation": "这六种不是天灾，都是将帅的过失。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t25",
          "t02"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-16",
        "chapterId": "di-xing",
        "order": 16,
        "original": "夫势均，以一击十，曰走。",
        "words": [
          {
            "word": "势",
            "explanation": "结构、节奏和位置共同形成的力量。",
            "modernMapping": "系统势能"
          },
          {
            "word": "夫势均",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "以一击十",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "双方实力相当，却用一分兵力攻击十分敌人，叫“走”，也就是溃逃。",
        "literalTranslation": "双方实力相当，却用一分兵力攻击十分敌人，叫“走”，也就是溃逃。",
        "freeTranslation": "这句话强调：常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "coreMeaning": "常规能力负责稳定，变化手段负责突破，二者要在节奏中配合。",
        "modernApplication": "管理团队时优先设计流程、激励和节奏，让正确行为顺势发生，而不是只靠个人意志反复推动。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "shi-neng",
          "zheng-qi"
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
        "original": "卒强吏弱，曰弛。",
        "words": [
          {
            "word": "卒强吏弱",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "曰弛",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "士卒强悍而军官软弱，叫“弛”，也就是纪律松弛。",
        "literalTranslation": "士卒强悍而军官软弱，叫“弛”，也就是纪律松弛。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "吏强卒弱，曰陷。",
        "words": [
          {
            "word": "吏强卒弱",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "曰陷",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "军官强悍而士卒软弱，叫“陷”，也就是力量脱节而陷入困境。",
        "literalTranslation": "军官强悍而士卒软弱，叫“陷”，也就是力量脱节而陷入困境。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-19",
        "chapterId": "di-xing",
        "order": 19,
        "original": "大吏怒而不服，遇敌怼而自战，将不知其能，曰崩。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "大吏怒而",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "不服",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "高级军官愤怒不服从命令，遇敌后怨恨而擅自作战，将帅又不了解他们的能力，叫“崩”，也就是系统崩坏。",
        "literalTranslation": "高级军官愤怒不服从命令，遇敌后怨恨而擅自作战，将帅又不了解他们的能力，叫“崩”，也就是系统崩坏。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-20",
        "chapterId": "di-xing",
        "order": 20,
        "original": "将弱不严，教道不明，吏卒无常，陈兵纵横，曰乱。",
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
          }
        ],
        "translation": "将帅软弱不严，教令不明，官兵行为无常，布阵杂乱，叫“乱”。",
        "literalTranslation": "将帅软弱不严，教令不明，官兵行为无常，布阵杂乱，叫“乱”。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-21",
        "chapterId": "di-xing",
        "order": 21,
        "original": "将不能料敌，以少合众，以弱击强，兵无选锋，曰北。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "将不能料",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "以少合众",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "将帅不能判断敌情，用少数兵力迎击多数敌人，以弱击强，又没有选拔精锐先锋，叫“北”，也就是败逃。",
        "literalTranslation": "将帅不能判断敌情，用少数兵力迎击多数敌人，以弱击强，又没有选拔精锐先锋，叫“北”，也就是败逃。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t01",
          "t08"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-22",
        "chapterId": "di-xing",
        "order": 22,
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
        "translation": "这六种，是失败的道路，是将帅最重要的责任，不能不认真考察。",
        "literalTranslation": "这六种，是失败的道路，是将帅最重要的责任，不能不认真考察。",
        "freeTranslation": "凡是代价足以影响生死存亡的行动，都必须先审慎评估。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t02",
          "t09"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-23",
        "chapterId": "di-xing",
        "order": 23,
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
        "translation": "地形，是用兵的辅助条件。",
        "literalTranslation": "地形，是用兵的辅助条件。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-24",
        "chapterId": "di-xing",
        "order": 24,
        "original": "料敌制胜，计险阨远近，上将之道也。",
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
        "translation": "判断敌情而制胜，计算险阻、远近、利害，是上等将帅的方法。",
        "literalTranslation": "判断敌情而制胜，计算险阻、远近、利害，是上等将帅的方法。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t04",
          "t11"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-25",
        "chapterId": "di-xing",
        "order": 25,
        "original": "知此而用战者必胜，不知此而用战者必败。",
        "words": [
          {
            "word": "知此而用",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "战者必胜",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "不知此而",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "懂得这些而用兵作战的必胜，不懂这些而用兵作战的必败。",
        "literalTranslation": "懂得这些而用兵作战的必胜，不懂这些而用兵作战的必败。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t05",
          "t12"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-26",
        "chapterId": "di-xing",
        "order": 26,
        "original": "故战道必胜，主曰无战，必战可也；战道不胜，主曰必战，无战可也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "故战道必",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "主曰无战",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "所以，如果根据战争规律必定能胜，即使君主说不要战，也可以坚持作战；如果根据战争规律不能取胜，即使君主命令一定要战，也可以不战。",
        "literalTranslation": "所以，如果根据战争规律必定能胜，即使君主说不要战，也可以坚持作战；如果根据战争规律不能取胜，即使君主命令一定要战，也可以不战。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t06",
          "t13"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-27",
        "chapterId": "di-xing",
        "order": 27,
        "original": "故进不求名，退不避罪，唯人是保，而利合于主，国之宝也。",
        "words": [
          {
            "word": "故进不求",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "退不避罪",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "唯人是保",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "所以，进攻不是为了求名，退却不是为了逃避罪责，而是一切以保全人民、符合国家利益为准。这样的将帅，是国家的珍宝。",
        "literalTranslation": "所以，进攻不是为了求名，退却不是为了逃避罪责，而是一切以保全人民、符合国家利益为准。这样的将帅，是国家的珍宝。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t07",
          "t14"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-28",
        "chapterId": "di-xing",
        "order": 28,
        "original": "视卒如婴儿，故可与之赴深溪。",
        "words": [
          {
            "word": "视卒如婴",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "故可与之",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "赴深溪",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "把士卒看作婴儿一样爱护，士卒就可以与他共赴深溪。",
        "literalTranslation": "把士卒看作婴儿一样爱护，士卒就可以与他共赴深溪。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-29",
        "chapterId": "di-xing",
        "order": 29,
        "original": "视卒如爱子，故可与之俱死。",
        "words": [
          {
            "word": "视卒如爱",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "故可与之",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "俱死",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "把士卒看作爱子一样对待，士卒就可以与他同生共死。",
        "literalTranslation": "把士卒看作爱子一样对待，士卒就可以与他同生共死。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-30",
        "chapterId": "di-xing",
        "order": 30,
        "original": "厚而不能使，爱而不能令，乱而不能治，譬若骄子，不可用也。",
        "words": [
          {
            "word": "厚而不能",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "爱而不能",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "乱而不能",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "但如果只厚爱而不能使用，只爱护而不能命令，混乱而不能治理，就像骄纵的孩子一样，不能使用。",
        "literalTranslation": "但如果只厚爱而不能使用，只爱护而不能命令，混乱而不能治理，就像骄纵的孩子一样，不能使用。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zheng-qi",
          "shi-neng"
        ],
        "relatedCaseIds": [
          "network-effect",
          "avoid-internal-friction"
        ],
        "relatedTrainingIds": [
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "di-xing-31",
        "chapterId": "di-xing",
        "order": 31,
        "original": "知吾卒之可以击，而不知敌之不可击，胜之半也。",
        "words": [
          {
            "word": "知吾卒之",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "可以击",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "而不知敌",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "只知道我方士卒可以攻击，却不知道敌人不可攻击，胜利只有一半把握。",
        "literalTranslation": "只知道我方士卒可以攻击，却不知道敌人不可攻击，胜利只有一半把握。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t11",
          "t18"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-32",
        "chapterId": "di-xing",
        "order": 32,
        "original": "知敌之可击，而不知吾卒之不可以击，胜之半也。",
        "words": [
          {
            "word": "知敌之可",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "而不知吾",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "卒之不可",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "只知道敌人可以攻击，却不知道我方士卒不能攻击，胜利也只有一半把握。",
        "literalTranslation": "只知道敌人可以攻击，却不知道我方士卒不能攻击，胜利也只有一半把握。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t12",
          "t19"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-33",
        "chapterId": "di-xing",
        "order": 33,
        "original": "知敌之可击，知吾卒之可以击，而不知地形之不可以战，胜之半也。",
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
        "translation": "知道敌人可以攻击，也知道我方士卒可以攻击，却不知道地形不适合作战，胜利仍然只有一半把握。",
        "literalTranslation": "知道敌人可以攻击，也知道我方士卒可以攻击，却不知道地形不适合作战，胜利仍然只有一半把握。",
        "freeTranslation": "这句话强调：判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t13",
          "t20"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "di-xing-34",
        "chapterId": "di-xing",
        "order": 34,
        "original": "故知兵者，动而不迷，举而不穷。",
        "words": [
          {
            "word": "故知兵者",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "动而不迷",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          },
          {
            "word": "举而不穷",
            "explanation": "理解这个表达时，应结合“地形与组织”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "地形与组织"
          }
        ],
        "translation": "所以，懂兵法的人，行动不会迷惑，举兵不会陷入困境。",
        "literalTranslation": "所以，懂兵法的人，行动不会迷惑，举兵不会陷入困境。",
        "freeTranslation": "这句话强调：本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“地形与组织”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于地形与组织时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“地形与组织”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "di-xing-35",
        "chapterId": "di-xing",
        "order": 35,
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
        "translation": "所以说：了解敌人，了解自己，胜利就不会危险；了解天时，了解地利，胜利才可以完全。",
        "literalTranslation": "所以说：了解敌人，了解自己，胜利就不会危险；了解天时，了解地利，胜利才可以完全。",
        "freeTranslation": "这句话强调：判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要只搜集对手信息，却忽略自己的资源、能力和承受边界。",
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
          "t15",
          "t22"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "定义九种处境",
      "根据处境调整行动",
      "说明死地求生边界",
      "强调组织联动和速度"
    ],
    "fullOriginal": "孙子曰：用兵之法，有散地，有轻地，有争地，有交地，有衢地，有重地，有圮地，有围地，有死地。\n诸侯自战其地者，为散地。\n入人之地不深者，为轻地。\n我得则利，彼得亦利者，为争地。\n我可以往，彼可以来者，为交地。\n诸侯之地三属，先至而得天下之众者，为衢地。\n入人之地深，背城邑多者，为重地。\n山林、险阻、沮泽，凡难行之道者，为圮地。\n所由入者隘，所从归者迂，彼寡可以击吾之众者，为围地。\n疾战则存，不疾战则亡者，为死地。\n是故散地则无战，轻地则无止，争地则无攻，交地则无绝，衢地则合交，重地则掠，圮地则行，围地则谋，死地则战。\n所谓古之善用兵者，能使敌人前后不相及，众寡不相恃，贵贱不相救，上下不相收，卒离而不集，兵合而不齐。\n合于利而动，不合于利而止。\n敢问：敌众整而将来，待之若何？\n曰：先夺其所爱，则听矣。\n兵之情主速，乘人之不及，由不虞之道，攻其所不戒也。\n凡为客之道，深则专，浅则散。\n去国越境而师者，绝地也。\n四达者，衢地也。\n入深者，重地也。\n入浅者，轻地也。\n背固前隘者，围地也。\n无所往者，死地也。\n是故散地，吾将一其志。\n轻地，吾将使之属。\n争地，吾将趋其后。\n交地，吾将谨其守。\n衢地，吾将固其结。\n重地，吾将继其食。\n圮地，吾将进其途。\n围地，吾将塞其阙。\n死地，吾将示之以不活。\n故兵之情，围则御，不得已则斗，过则从。\n是故不知诸侯之谋者，不能预交。\n不知山林、险阻、沮泽之形者，不能行军。\n不用乡导者，不能得地利。\n凡此四五者，一不知，非霸王之兵也。\n夫霸王之兵，伐大国，则其众不得聚；威加于敌，则其交不得合。\n是故不争天下之交，不养天下之权，信己之私，威加于敌，故其城可拔，其国可隳。\n施无法之赏，悬无政之令，犯三军之众，若使一人。\n犯之以事，勿告以言；犯之以利，勿告以害。\n投之亡地然后存，陷之死地然后生。\n夫众陷于害，然后能为胜败。\n故为兵之事，在顺详敌之意，并敌一向，千里杀将，是谓巧能成事。\n是故政举之日，夷关折符，无通其使。\n厉于廊庙之上，以诛其事。\n敌人开阖，必亟入之。\n先其所爱，微与之期。\n践墨随敌，以决战事。\n是故始如处女，敌人开户；后如脱兔，敌不及拒。",
    "sentences": [
      {
        "id": "jiu-di-1",
        "chapterId": "jiu-di",
        "order": 1,
        "original": "孙子曰：用兵之法，有散地，有轻地，有争地，有交地，有衢地，有重地，有圮地，有围地，有死地。",
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
        "translation": "孙子说：用兵的地势有九种：散地、轻地、争地、交地、衢地、重地、圮地、围地、死地。",
        "literalTranslation": "孙子说：用兵的地势有九种：散地、轻地、争地、交地、衢地、重地、圮地、围地、死地。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
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
        "original": "诸侯自战其地者，为散地。",
        "words": [
          {
            "word": "散地",
            "explanation": "人心易散的本土处境。",
            "modernMapping": "低承诺场景"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "诸侯在自己国土上作战，叫散地。因为士卒容易各恋家乡，人心分散。",
        "literalTranslation": "诸侯在自己国土上作战，叫散地。因为士卒容易各恋家乡，人心分散。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-3",
        "chapterId": "jiu-di",
        "order": 3,
        "original": "入人之地不深者，为轻地。",
        "words": [
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "进入敌国不深，叫轻地。因为士卒还容易回头，军心不够专一。",
        "literalTranslation": "进入敌国不深，叫轻地。因为士卒还容易回头，军心不够专一。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-4",
        "chapterId": "jiu-di",
        "order": 4,
        "original": "我得则利，彼得亦利者，为争地。",
        "words": [
          {
            "word": "争地",
            "explanation": "双方都想夺取的要点。",
            "modernMapping": "关键资源"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "我方取得有利，敌方取得也有利，叫争地。",
        "literalTranslation": "我方取得有利，敌方取得也有利，叫争地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "li-hai-bing-guan",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng"
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
        "original": "我可以往，彼可以来者，为交地。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "我可以往",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "彼可以来",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "我方可以去，敌方也可以来，叫交地。",
        "literalTranslation": "我方可以去，敌方也可以来，叫交地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-6",
        "chapterId": "jiu-di",
        "order": 6,
        "original": "诸侯之地三属，先至而得天下之众者，为衢地。",
        "words": [
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
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
        "translation": "处于多国交界、四通八达之处，谁先到达就可以取得诸侯支持，叫衢地。",
        "literalTranslation": "处于多国交界、四通八达之处，谁先到达就可以取得诸侯支持，叫衢地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t17",
          "t24"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-7",
        "chapterId": "jiu-di",
        "order": 7,
        "original": "入人之地深，背城邑多者，为重地。",
        "words": [
          {
            "word": "重地",
            "explanation": "深入敌境、资源依赖增强的地区。",
            "modernMapping": "深度投入"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "深入敌国，背后经过许多敌方城邑，叫重地。",
        "literalTranslation": "深入敌国，背后经过许多敌方城邑，叫重地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-8",
        "chapterId": "jiu-di",
        "order": 8,
        "original": "山林、险阻、沮泽，凡难行之道者，为圮地。",
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
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "山林、险阻、沼泽等难以通行的地方，叫圮地。",
        "literalTranslation": "山林、险阻、沼泽等难以通行的地方，叫圮地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-9",
        "chapterId": "jiu-di",
        "order": 9,
        "original": "所由入者隘，所从归者迂，彼寡可以击吾之众者，为围地。",
        "words": [
          {
            "word": "围地",
            "explanation": "进出受限的危险处境。",
            "modernMapping": "受限局面"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "隘",
            "explanation": "狭窄关口。",
            "modernMapping": "瓶颈资源"
          }
        ],
        "translation": "进入的道路狭窄，退回的道路迂远，敌人用少数兵力就可以攻击我方多数兵力，叫围地。",
        "literalTranslation": "进入的道路狭窄，退回的道路迂远，敌人用少数兵力就可以攻击我方多数兵力，叫围地。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
        "relatedConceptIds": [
          "dao-tian-di-jiang-fa",
          "yi-yu-wei-zhi",
          "zhi-tian-zhi-di",
          "si-di-qiu-sheng"
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
        "original": "疾战则存，不疾战则亡者，为死地。",
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
        "translation": "快速决战就能生存，不快速决战就会灭亡，叫死地。",
        "literalTranslation": "快速决战就能生存，不快速决战就会灭亡，叫死地。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
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
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-11",
        "chapterId": "jiu-di",
        "order": 11,
        "original": "是故散地则无战，轻地则无止，争地则无攻，交地则无绝，衢地则合交，重地则掠，圮地则行，围地则谋，死地则战。",
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
        "translation": "所以，在散地不要作战；在轻地不要停留；在争地不要强攻；在交地不要断绝联络；在衢地要结交诸侯；在重地要夺取粮食；在圮地要迅速通过；在围地要运用谋略；在死地要拼死作战。",
        "literalTranslation": "所以，在散地不要作战；在轻地不要停留；在争地不要强攻；在交地不要断绝联络；在衢地要结交诸侯；在重地要夺取粮食；在圮地要迅速通过；在围地要运用谋略；在死地要拼死作战。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
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
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-12",
        "chapterId": "jiu-di",
        "order": 12,
        "original": "所谓古之善用兵者，能使敌人前后不相及，众寡不相恃，贵贱不相救，上下不相收，卒离而不集，兵合而不齐。",
        "words": [
          {
            "word": "所谓古之",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "善用兵者",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "能使敌人",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "古代善于用兵的人，能够使敌人前后不能相互接应，多数与少数不能相互依靠，贵族与平民不能相互救援，上级与下级不能相互收拢，士卒分散而不能集合，兵力聚合而不能整齐。",
        "literalTranslation": "古代善于用兵的人，能够使敌人前后不能相互接应，多数与少数不能相互依靠，贵族与平民不能相互救援，上级与下级不能相互收拢，士卒分散而不能集合，兵力聚合而不能整齐。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-13",
        "chapterId": "jiu-di",
        "order": 13,
        "original": "合于利而动，不合于利而止。",
        "words": [
          {
            "word": "合于利而",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不合于利",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "而止",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "符合利益就行动，不符合利益就停止。",
        "literalTranslation": "符合利益就行动，不符合利益就停止。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t24",
          "t01"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-14",
        "chapterId": "jiu-di",
        "order": 14,
        "original": "敢问：敌众整而将来，待之若何？",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "敢问",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "敌众整而",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "有人问：敌人人多而且阵势严整，正要向我进攻，该怎么办？",
        "literalTranslation": "有人问：敌人人多而且阵势严整，正要向我进攻，该怎么办？",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "jiu-di-15",
        "chapterId": "jiu-di",
        "order": 15,
        "original": "曰：先夺其所爱，则听矣。",
        "words": [
          {
            "word": "先夺其所",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "则听矣",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "回答说：先夺取敌人最重视、最必救的地方，敌人就会听从我的调动。",
        "literalTranslation": "回答说：先夺取敌人最重视、最必救的地方，敌人就会听从我的调动。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "兵之情主速，乘人之不及，由不虞之道，攻其所不戒也。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "兵之情主",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "乘人之不",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "用兵的规律，重在迅速。要趁敌人来不及防备，走敌人意料不到的道路，攻击敌人没有戒备的地方。",
        "literalTranslation": "用兵的规律，重在迅速。要趁敌人来不及防备，走敌人意料不到的道路，攻击敌人没有戒备的地方。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-17",
        "chapterId": "jiu-di",
        "order": 17,
        "original": "凡为客之道，深则专，浅则散。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "凡为客之",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "深则专",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "凡是进入敌国作战，深入则军心专一，浅入则军心分散。",
        "literalTranslation": "凡是进入敌国作战，深入则军心专一，浅入则军心分散。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t28",
          "t05"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-18",
        "chapterId": "jiu-di",
        "order": 18,
        "original": "去国越境而师者，绝地也。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "去国越境",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "而师者",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "离开本国越过边境作战，叫绝地。",
        "literalTranslation": "离开本国越过边境作战，叫绝地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t29",
          "t06"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-19",
        "chapterId": "jiu-di",
        "order": 19,
        "original": "四达者，衢地也。",
        "words": [
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "四通八达的地方，叫衢地。",
        "literalTranslation": "四通八达的地方，叫衢地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t30",
          "t07"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-20",
        "chapterId": "jiu-di",
        "order": 20,
        "original": "入深者，重地也。",
        "words": [
          {
            "word": "重地",
            "explanation": "深入敌境、资源依赖增强的地区。",
            "modernMapping": "深度投入"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "深入敌境，叫重地。",
        "literalTranslation": "深入敌境，叫重地。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t01",
          "t08"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-21",
        "chapterId": "jiu-di",
        "order": 21,
        "original": "入浅者，轻地也。",
        "words": [
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          }
        ],
        "translation": "进入敌境不深，叫轻地。",
        "literalTranslation": "进入敌境不深，叫轻地。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t02",
          "t09"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-22",
        "chapterId": "jiu-di",
        "order": 22,
        "original": "背固前隘者，围地也。",
        "words": [
          {
            "word": "围地",
            "explanation": "进出受限的危险处境。",
            "modernMapping": "受限局面"
          },
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "隘",
            "explanation": "狭窄关口。",
            "modernMapping": "瓶颈资源"
          }
        ],
        "translation": "背后坚固、前方狭隘，叫围地。",
        "literalTranslation": "背后坚固、前方狭隘，叫围地。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
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
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-23",
        "chapterId": "jiu-di",
        "order": 23,
        "original": "无所往者，死地也。",
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
        "translation": "没有退路，叫死地。",
        "literalTranslation": "没有退路，叫死地。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
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
          "t04",
          "t11"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-24",
        "chapterId": "jiu-di",
        "order": 24,
        "original": "是故散地，吾将一其志。",
        "words": [
          {
            "word": "散地",
            "explanation": "人心易散的本土处境。",
            "modernMapping": "低承诺场景"
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
        "translation": "所以，在散地，我要统一士卒意志。",
        "literalTranslation": "所以，在散地，我要统一士卒意志。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t05",
          "t12"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-25",
        "chapterId": "jiu-di",
        "order": 25,
        "original": "轻地，吾将使之属。",
        "words": [
          {
            "word": "轻地",
            "explanation": "进入不深、容易退却的处境。",
            "modernMapping": "浅层投入"
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
        "translation": "在轻地，我要使部队互相连接，不可离散。",
        "literalTranslation": "在轻地，我要使部队互相连接，不可离散。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t06",
          "t13"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-26",
        "chapterId": "jiu-di",
        "order": 26,
        "original": "争地，吾将趋其后。",
        "words": [
          {
            "word": "争地",
            "explanation": "双方都想夺取的要点。",
            "modernMapping": "关键资源"
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
        "translation": "在争地，我要快速趋向敌人后方。",
        "literalTranslation": "在争地，我要快速趋向敌人后方。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t07",
          "t14"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-27",
        "chapterId": "jiu-di",
        "order": 27,
        "original": "交地，吾将谨其守。",
        "words": [
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
        "translation": "在交地，我要谨慎防守。",
        "literalTranslation": "在交地，我要谨慎防守。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t08",
          "t15"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-28",
        "chapterId": "jiu-di",
        "order": 28,
        "original": "衢地，吾将固其结。",
        "words": [
          {
            "word": "衢地",
            "explanation": "四通八达、适合结交的地区。",
            "modernMapping": "枢纽网络"
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
        "translation": "在衢地，我要巩固外交联盟。",
        "literalTranslation": "在衢地，我要巩固外交联盟。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t09",
          "t16"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-29",
        "chapterId": "jiu-di",
        "order": 29,
        "original": "重地，吾将继其食。",
        "words": [
          {
            "word": "重地",
            "explanation": "深入敌境、资源依赖增强的地区。",
            "modernMapping": "深度投入"
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
        "translation": "在重地，我要保障粮食供应。",
        "literalTranslation": "在重地，我要保障粮食供应。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t10",
          "t17"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-30",
        "chapterId": "jiu-di",
        "order": 30,
        "original": "圮地，吾将进其途。",
        "words": [
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
        "translation": "在圮地，我要迅速通过道路。",
        "literalTranslation": "在圮地，我要迅速通过道路。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "围地，吾将塞其阙。",
        "words": [
          {
            "word": "围地",
            "explanation": "进出受限的危险处境。",
            "modernMapping": "受限局面"
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
        "translation": "在围地，我要堵塞退路，使士卒专心应敌。",
        "literalTranslation": "在围地，我要堵塞退路，使士卒专心应敌。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-32",
        "chapterId": "jiu-di",
        "order": 32,
        "original": "死地，吾将示之以不活。",
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
          },
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          }
        ],
        "translation": "在死地，我要让士卒明白没有生路可退。",
        "literalTranslation": "在死地，我要让士卒明白没有生路可退。",
        "freeTranslation": "这句话强调：虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "coreMeaning": "虚实变化的重点是保护主动权，并根据对方反应选择时机。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把“诡道”理解成无底线欺骗；它强调的是信息控制、虚实变化和因势制权，不能突破法律与伦理边界。",
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
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-33",
        "chapterId": "jiu-di",
        "order": 33,
        "original": "故兵之情，围则御，不得已则斗，过则从。",
        "words": [
          {
            "word": "故兵之情",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "围则御",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不得已则",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "士卒的心理是：被包围就会抵御，不得已就会战斗，陷入极端危险就会服从指挥。",
        "literalTranslation": "士卒的心理是：被包围就会抵御，不得已就会战斗，陷入极端危险就会服从指挥。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "shi-neng",
          "bi-shi-ji-xu"
        ],
        "relatedCaseIds": [
          "brand-position",
          "system-refactor"
        ],
        "relatedTrainingIds": [
          "t14",
          "t21"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-34",
        "chapterId": "jiu-di",
        "order": 34,
        "original": "是故不知诸侯之谋者，不能预交。",
        "words": [
          {
            "word": "是故不知",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "诸侯之谋",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不能预交",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "所以，不了解诸侯的谋划，就不能预先外交结盟。",
        "literalTranslation": "所以，不了解诸侯的谋划，就不能预先外交结盟。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "不知山林、险阻、沮泽之形者，不能行军。",
        "words": [
          {
            "word": "行军",
            "explanation": "行军驻扎和观察敌情的方法。",
            "modernMapping": "现场判断"
          },
          {
            "word": "险",
            "explanation": "险要地形。",
            "modernMapping": "高风险入口"
          }
        ],
        "translation": "不了解山林、险阻、沼泽地形，就不能行军。",
        "literalTranslation": "不了解山林、险阻、沼泽地形，就不能行军。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "运营监控、客户访谈和项目管理要重视弱信号：异常流量、措辞变化、迟迟不行动都可能指向真实状态。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t16",
          "t23"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-36",
        "chapterId": "jiu-di",
        "order": 36,
        "original": "不用乡导者，不能得地利。",
        "words": [
          {
            "word": "地",
            "explanation": "远近、险易、广狭等空间与环境条件。",
            "modernMapping": "资源环境"
          },
          {
            "word": "不用乡导",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "不能得地",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "不用当地向导，就不能获得地利。",
        "literalTranslation": "不用当地向导，就不能获得地利。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t17",
          "t24"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-37",
        "chapterId": "jiu-di",
        "order": 37,
        "original": "凡此四五者，一不知，非霸王之兵也。",
        "words": [
          {
            "word": "凡此四五",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "一不知",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "非霸王之",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "这些方面，只要有一项不知道，就不是能够称霸天下的军队。",
        "literalTranslation": "这些方面，只要有一项不知道，就不是能够称霸天下的军队。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "夫霸王之兵，伐大国，则其众不得聚；威加于敌，则其交不得合。",
        "words": [
          {
            "word": "夫霸王之",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "伐大国",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "则其众不",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "称霸者的军队，进攻大国时，能使敌人大军无法聚集；威势加在敌人身上，能使敌人的盟国无法联合。",
        "literalTranslation": "称霸者的军队，进攻大国时，能使敌人大军无法聚集；威势加在敌人身上，能使敌人的盟国无法联合。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "jiu-di-39",
        "chapterId": "jiu-di",
        "order": 39,
        "original": "是故不争天下之交，不养天下之权，信己之私，威加于敌，故其城可拔，其国可隳。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "是故不争",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "天下之交",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "所以，不一定要争取天下所有外交关系，也不一定要培养天下所有权势，而是依靠自己的战略主动，将威势加于敌人。这样，敌城可以攻下，敌国可以摧毁。",
        "literalTranslation": "所以，不一定要争取天下所有外交关系，也不一定要培养天下所有权势，而是依靠自己的战略主动，将威势加于敌人。这样，敌城可以攻下，敌国可以摧毁。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t20",
          "t27"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "jiu-di-40",
        "chapterId": "jiu-di",
        "order": 40,
        "original": "施无法之赏，悬无政之令，犯三军之众，若使一人。",
        "words": [
          {
            "word": "法",
            "explanation": "制度、编制、职责和资源使用规则。",
            "modernMapping": "流程治理"
          },
          {
            "word": "施无法之",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "悬无政之",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "实行超出常规的奖赏，发布特殊时期的命令，驱使三军士众，就像指挥一个人一样。",
        "literalTranslation": "实行超出常规的奖赏，发布特殊时期的命令，驱使三军士众，就像指挥一个人一样。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t21",
          "t28"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "jiu-di-41",
        "chapterId": "jiu-di",
        "order": 41,
        "original": "犯之以事，勿告以言；犯之以利，勿告以害。",
        "words": [
          {
            "word": "犯之以事",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "勿告以言",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "犯之以利",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "让士卒承担任务，不必事先把所有道理都说尽；用利益驱使他们，不必把所有危险都讲明。",
        "literalTranslation": "让士卒承担任务，不必事先把所有道理都说尽；用利益驱使他们，不必把所有危险都讲明。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "translation": "把军队投置在亡地，然后才能保存；把军队陷入死地，然后才能求生。",
        "literalTranslation": "把军队投置在亡地，然后才能保存；把军队陷入死地，然后才能求生。",
        "freeTranslation": "这句话强调：处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "coreMeaning": "处境不同，打法就必须不同；先识别位置和约束，再谈行动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要轻易制造绝境来逼迫团队；这类手段代价极高，只能在条件清楚时谨慎使用。",
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
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "然后能为",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "胜败",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "士卒陷入危险之后，才可能真正发挥决定胜败的力量。",
        "literalTranslation": "士卒陷入危险之后，才可能真正发挥决定胜败的力量。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "在顺详敌",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "所以，用兵之事，在于顺着敌人的意图仔细判断，然后集中兵力指向一个方向，即使千里之外也能擒杀敌将，这叫巧妙地成就大事。",
        "literalTranslation": "所以，用兵之事，在于顺着敌人的意图仔细判断，然后集中兵力指向一个方向，即使千里之外也能擒杀敌将，这叫巧妙地成就大事。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "是故政举之日，夷关折符，无通其使。",
        "words": [
          {
            "word": "通",
            "explanation": "双方都可往来的地形。",
            "modernMapping": "开放市场"
          },
          {
            "word": "是故政举",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "之日",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "所以，在决定出兵行动之日，要封锁关口，废除通行符信，不让敌使往来。",
        "literalTranslation": "所以，在决定出兵行动之日，要封锁关口，废除通行符信，不让敌使往来。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "厉于廊庙之上，以诛其事。",
        "words": [
          {
            "word": "厉于廊庙",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "之上",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "以诛其事",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "在庙堂上严密谋划，以决定作战大事。",
        "literalTranslation": "在庙堂上严密谋划，以决定作战大事。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "敌人开阖，必亟入之。",
        "words": [
          {
            "word": "敌人开阖",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "必亟入之",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "敌人一旦出现空隙，必须迅速进入。",
        "literalTranslation": "敌人一旦出现空隙，必须迅速进入。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "jiu-di-48",
        "chapterId": "jiu-di",
        "order": 48,
        "original": "先其所爱，微与之期。",
        "words": [
          {
            "word": "先其所爱",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "微与之期",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "先夺取敌人所重视的地方，暗中掌握作战时机。",
        "literalTranslation": "先夺取敌人所重视的地方，暗中掌握作战时机。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "id": "jiu-di-49",
        "chapterId": "jiu-di",
        "order": 49,
        "original": "践墨随敌，以决战事。",
        "words": [
          {
            "word": "践墨随敌",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "以决战事",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "按照法度和计划，根据敌情变化而行动，以决定战争大事。",
        "literalTranslation": "按照法度和计划，根据敌情变化而行动，以决定战争大事。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "id": "jiu-di-50",
        "chapterId": "jiu-di",
        "order": 50,
        "original": "是故始如处女，敌人开户；后如脱兔，敌不及拒。",
        "words": [
          {
            "word": "是故始如",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "处女",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          },
          {
            "word": "敌人开户",
            "explanation": "理解这个表达时，应结合“处境管理”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "处境管理"
          }
        ],
        "translation": "所以，开始时要像处女一样沉静柔弱，使敌人放松门户；行动时要像脱逃的兔子一样迅速，使敌人来不及抵抗。",
        "literalTranslation": "所以，开始时要像处女一样沉静柔弱，使敌人放松门户；行动时要像脱逃的兔子一样迅速，使敌人来不及抵抗。",
        "freeTranslation": "这句话强调：本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“处境管理”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于处境管理时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“处境管理”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "列出火攻类型",
      "强调条件准备",
      "强调时机配合",
      "警惕情绪化行动"
    ],
    "fullOriginal": "孙子曰：凡火攻有五：一曰火人，二曰火积，三曰火辎，四曰火库，五曰火队。\n行火必有因，烟火必素具。\n发火有时，起火有日。\n时者，天之燥也；日者，月在箕、壁、翼、轸也。\n凡此四宿者，风起之日也。\n凡火攻，必因五火之变而应之。\n火发于内，则早应之于外。\n火发而其兵静者，待而勿攻。\n极其火力，可从而从之，不可从则止。\n火可发于外，无待于内，以时发之。\n火发上风，无攻下风。\n昼风久，夜风止。\n凡军必知有五火之变，以数守之。\n故以火佐攻者明，以水佐攻者强。\n水可以绝，不可以夺。\n夫战胜攻取，而不修其功者凶，命曰费留。\n故曰：明主虑之，良将修之。\n非利不动，非得不用，非危不战。\n主不可以怒而兴师，将不可以愠而致战。\n合于利而动，不合于利而止。\n怒可以复喜，愠可以复悦；亡国不可以复存，死者不可以复生。\n故明主慎之，良将警之。此安国全军之道也。",
    "sentences": [
      {
        "id": "huo-gong-1",
        "chapterId": "huo-gong",
        "order": 1,
        "original": "孙子曰：凡火攻有五：一曰火人，二曰火积，三曰火辎，四曰火库，五曰火队。",
        "words": [
          {
            "word": "火攻",
            "explanation": "以火作为辅助攻击手段。",
            "modernMapping": "高风险手段"
          },
          {
            "word": "孙子曰",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "凡火攻有",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "孙子说：火攻有五种：一是焚烧敌人营兵，二是焚烧敌人积储，三是焚烧敌人辎重，四是焚烧敌人仓库，五是焚烧敌人队伍和运输设施。",
        "literalTranslation": "孙子说：火攻有五种：一是焚烧敌人营兵，二是焚烧敌人积储，三是焚烧敌人辎重，四是焚烧敌人仓库，五是焚烧敌人队伍和运输设施。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
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
        "original": "行火必有因，烟火必素具。",
        "words": [
          {
            "word": "行火必有",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "烟火必素",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "实施火攻必须具备条件，放火器材必须平时准备好。",
        "literalTranslation": "实施火攻必须具备条件，放火器材必须平时准备好。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "起火有日",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "发火要选择适当时机，起火要选择适当日期。",
        "literalTranslation": "发火要选择适当时机，起火要选择适当日期。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "时者，天之燥也；日者，月在箕、壁、翼、轸也。",
        "words": [
          {
            "word": "天",
            "explanation": "时令、气候与外部周期条件。",
            "modernMapping": "时间窗口"
          },
          {
            "word": "时者",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "天之燥也",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "所谓时机，是指天气干燥；所谓日期，是指月亮运行到箕、壁、翼、轸四宿的时候。",
        "literalTranslation": "所谓时机，是指天气干燥；所谓日期，是指月亮运行到箕、壁、翼、轸四宿的时候。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "凡此四宿者，风起之日也。",
        "words": [
          {
            "word": "凡此四宿",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "风起之日",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "这四个星宿所在之日，通常是起风的时候。",
        "literalTranslation": "这四个星宿所在之日，通常是起风的时候。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "凡火攻，必因五火之变而应之。",
        "words": [
          {
            "word": "火攻",
            "explanation": "以火作为辅助攻击手段。",
            "modernMapping": "高风险手段"
          },
          {
            "word": "凡火攻",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "必因五火",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "凡是火攻，必须根据五种火攻造成的变化而相应行动。",
        "literalTranslation": "凡是火攻，必须根据五种火攻造成的变化而相应行动。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
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
          "t18",
          "t25"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-7",
        "chapterId": "huo-gong",
        "order": 7,
        "original": "火发于内，则早应之于外。",
        "words": [
          {
            "word": "火发于内",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "则早应之",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "于外",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "火从敌营内部烧起，我方要及早从外部配合。",
        "literalTranslation": "火从敌营内部烧起，我方要及早从外部配合。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-8",
        "chapterId": "huo-gong",
        "order": 8,
        "original": "火发而其兵静者，待而勿攻。",
        "words": [
          {
            "word": "火发而其",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "兵静者",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "待而勿攻",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "火已经烧起，但敌军仍然安静，就要等待，不可贸然进攻。",
        "literalTranslation": "火已经烧起，但敌军仍然安静，就要等待，不可贸然进攻。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t20",
          "t27"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-9",
        "chapterId": "huo-gong",
        "order": 9,
        "original": "极其火力，可从而从之，不可从则止。",
        "words": [
          {
            "word": "极其火力",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "可从而从",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "不可从则",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "等火势达到极盛，如果可以跟进就跟进；如果不能跟进就停止。",
        "literalTranslation": "等火势达到极盛，如果可以跟进就跟进；如果不能跟进就停止。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "火可发于外，无待于内，以时发之。",
        "words": [
          {
            "word": "火可发于",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "无待于内",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "以时发之",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "火也可以从外部放起，不必一定等待内部响应，只要时机合适就可以发动。",
        "literalTranslation": "火也可以从外部放起，不必一定等待内部响应，只要时机合适就可以发动。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
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
        "original": "火发上风，无攻下风。",
        "words": [
          {
            "word": "火发上风",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "无攻下风",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "火从上风处烧起时，不要从下风处进攻。",
        "literalTranslation": "火从上风处烧起时，不要从下风处进攻。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "使用高风险手段前要确认条件、时机和后果边界，例如降价、舆论、迁移、封禁或系统切换。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t23",
          "t30"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-12",
        "chapterId": "huo-gong",
        "order": 12,
        "original": "昼风久，夜风止。",
        "words": [
          {
            "word": "昼风久",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "夜风止",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "白天风吹得久，夜晚往往会停止。",
        "literalTranslation": "白天风吹得久，夜晚往往会停止。",
        "freeTranslation": "这句话强调：长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "coreMeaning": "长期消耗会吞掉资源和士气，胜利必须同时计算成本。",
        "modernApplication": "长期延期项目、价格战或持续内耗要设置止损线，定期判断投入是否还会换来有效结果。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "bing-gui-sheng",
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t24",
          "t01"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-13",
        "chapterId": "huo-gong",
        "order": 13,
        "original": "凡军必知有五火之变，以数守之。",
        "words": [
          {
            "word": "凡军必知",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "有五火之",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "以数守之",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "凡是军队，必须懂得五种火攻的变化，并用规律来把握它。",
        "literalTranslation": "凡是军队，必须懂得五种火攻的变化，并用规律来把握它。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t25",
          "t02"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-14",
        "chapterId": "huo-gong",
        "order": 14,
        "original": "故以火佐攻者明，以水佐攻者强。",
        "words": [
          {
            "word": "故以火佐",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "攻者明",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "以水佐攻",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "所以，用火辅助进攻，是明智；用水辅助进攻，是强有力。",
        "literalTranslation": "所以，用火辅助进攻，是明智；用水辅助进攻，是强有力。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t26",
          "t03"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-15",
        "chapterId": "huo-gong",
        "order": 15,
        "original": "水可以绝，不可以夺。",
        "words": [
          {
            "word": "水可以绝",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "不可以夺",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "水可以隔绝敌人，却不能像火那样夺取和摧毁敌人的物资。",
        "literalTranslation": "水可以隔绝敌人，却不能像火那样夺取和摧毁敌人的物资。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t27",
          "t04"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-16",
        "chapterId": "huo-gong",
        "order": 16,
        "original": "夫战胜攻取，而不修其功者凶，命曰费留。",
        "words": [
          {
            "word": "夫战胜攻",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "而不修其",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "功者凶",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "如果战胜攻取之后，却不能巩固战果，这是凶险的，叫“费留”，也就是耗费巨大却停滞无功。",
        "literalTranslation": "如果战胜攻取之后，却不能巩固战果，这是凶险的，叫“费留”，也就是耗费巨大却停滞无功。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t28",
          "t05"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "huo-gong-17",
        "chapterId": "huo-gong",
        "order": 17,
        "original": "故曰：明主虑之，良将修之。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故曰",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "明主虑之",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "所以说：明智的君主要慎重考虑，优秀的将帅要妥善处理。",
        "literalTranslation": "所以说：明智的君主要慎重考虑，优秀的将帅要妥善处理。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "非利不动，非得不用，非危不战。",
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
          }
        ],
        "translation": "没有利益不要行动，没有把握不要用兵，不到危急时不要开战。",
        "literalTranslation": "没有利益不要行动，没有把握不要用兵，不到危急时不要开战。",
        "freeTranslation": "没有明确收益或真正必要性时，不要被情绪推着行动。",
        "coreMeaning": "高风险手段必须受条件约束，不能由情绪驱动。",
        "modernApplication": "危机决策中先问是否有明确收益、能否达成目标、是否真正危险，避免被愤怒或焦虑驱动。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t30",
          "t07"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "huo-gong-19",
        "chapterId": "huo-gong",
        "order": 19,
        "original": "主不可以怒而兴师，将不可以愠而致战。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "主不可以",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "怒而兴师",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "君主不能因为愤怒而兴兵，将帅不能因为怨愤而求战。",
        "literalTranslation": "君主不能因为愤怒而兴兵，将帅不能因为怨愤而求战。",
        "freeTranslation": "这句话强调：高风险手段必须受条件约束，不能由情绪驱动。",
        "coreMeaning": "高风险手段必须受条件约束，不能由情绪驱动。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
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
          "t01",
          "t08"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-20",
        "chapterId": "huo-gong",
        "order": 20,
        "original": "合于利而动，不合于利而止。",
        "words": [
          {
            "word": "合于利而",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "不合于利",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "而止",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "符合利益就行动，不符合利益就停止。",
        "literalTranslation": "符合利益就行动，不符合利益就停止。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于风险与时机时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t02",
          "t09"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "huo-gong-21",
        "chapterId": "huo-gong",
        "order": 21,
        "original": "怒可以复喜，愠可以复悦；亡国不可以复存，死者不可以复生。",
        "words": [
          {
            "word": "怒可以复",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "愠可以复",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          },
          {
            "word": "亡国不可",
            "explanation": "理解这个表达时，应结合“风险与时机”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "风险与时机"
          }
        ],
        "translation": "愤怒可以重新变成喜悦，怨愤可以重新变成高兴；但亡国不能重新复存，死人不能重新复生。",
        "literalTranslation": "愤怒可以重新变成喜悦，怨愤可以重新变成高兴；但亡国不能重新复存，死人不能重新复生。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "危机决策中先问是否有明确收益、能否达成目标、是否真正危险，避免被愤怒或焦虑驱动。",
        "misunderstanding": "不要把高风险手段当成情绪出口；时机、条件和后果边界必须先确认。",
        "relatedConceptIds": [
          "bi-shi-ji-xu",
          "zhi-ren-bu-zhi-yu-ren"
        ],
        "relatedCaseIds": [
          "project-kickoff",
          "tech-debt"
        ],
        "relatedTrainingIds": [
          "t03",
          "t10"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "huo-gong-22",
        "chapterId": "huo-gong",
        "order": 22,
        "original": "故明主慎之，良将警之。此安国全军之道也。",
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
          }
        ],
        "translation": "所以，明智的君主要慎重，优秀的将帅要警惕。这才是安定国家、保全军队的道路。",
        "literalTranslation": "所以，明智的君主要慎重，优秀的将帅要警惕。这才是安定国家、保全军队的道路。",
        "freeTranslation": "这句话强调：本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“风险与时机”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“风险与时机”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
          "t04",
          "t11"
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
      "note": "原文与白话译文参照《孙子兵法原文与译文.txt》整理；逐句应用与误读提示为学习辅助内容，后续可继续复校。"
    },
    "structure": [
      "信息决定成本与胜算",
      "反对迷信和空想推测",
      "提出五间体系",
      "强调保密与激励"
    ],
    "fullOriginal": "孙子曰：凡兴师十万，出征千里，百姓之费、公家之奉，日费千金；内外骚动，怠于道路，不得操事者，七十万家。\n相守数年，以争一日之胜，而爱爵禄百金，不知敌之情者，不仁之至也，非人之将也，非主之佐也，非胜之主也。\n故明君贤将所以动而胜人，成功出于众者，先知也。\n先知者，不可取于鬼神，不可象于事，不可验于度，必取于人，知敌之情者也。\n故用间有五：有因间，有内间，有反间，有死间，有生间。\n因间者，因其乡人而用之。\n内间者，因其官人而用之。\n反间者，因其敌间而用之。\n死间者，为诳事于外，令吾间知之，而传于敌间也。\n生间者，反报也。\n故三军之事，莫亲于间，赏莫厚于间，事莫密于间。\n非圣智不能用间，非仁义不能使间，非微妙不能得间之实。\n微哉微哉！无所不用间也。\n间事未发，而先闻者，间与所告者皆死。\n凡军之所欲击，城之所欲攻，人之所欲杀，必先知其守将、左右、谒者、门者、舍人之姓名，令吾间必索知之。\n必索敌人之间来间我者，因而利之，导而舍之，故反间可得而用也。\n因是而知之，故乡间、内间可得而使也。\n因是而知之，故死间为诳事，可使告敌。\n因是而知之，故生间可使如期。\n五间之事，主必知之，知之必在于反间，故反间不可不厚也。\n昔殷之兴也，伊挚在夏；周之兴也，吕牙在殷。\n故惟明君贤将，能以上智为间者，必成大功。\n此兵之要，三军之所恃而动也。",
    "sentences": [
      {
        "id": "yong-jian-1",
        "chapterId": "yong-jian",
        "order": 1,
        "original": "孙子曰：凡兴师十万，出征千里，百姓之费、公家之奉，日费千金；内外骚动，怠于道路，不得操事者，七十万家。",
        "words": [
          {
            "word": "道",
            "explanation": "上下同欲、目标一致的组织状态。",
            "modernMapping": "组织共识"
          },
          {
            "word": "孙子曰",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "凡兴师十",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "孙子说：凡是兴兵十万，出征千里，百姓的耗费、国家的供给，每天都要花费大量钱财；国内国外都会骚动，百姓疲于道路运输，不能正常从事生产的，可能涉及几十万家。",
        "literalTranslation": "孙子说：凡是兴兵十万，出征千里，百姓的耗费、国家的供给，每天都要花费大量钱财；国内国外都会骚动，百姓疲于道路运输，不能正常从事生产的，可能涉及几十万家。",
        "freeTranslation": "这句话强调：本句服务于“信息优势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“信息优势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“信息优势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "original": "相守数年，以争一日之胜，而爱爵禄百金，不知敌之情者，不仁之至也，非人之将也，非主之佐也，非胜之主也。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "相守数年",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "以争一日",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "两军相持数年，只为争取一日的胜利，却吝惜爵位、俸禄和少量钱财，不肯用来获取敌情，这是极端不仁。这样的人，不配做军队的将帅，不配做君主的辅佐，也不是能够取胜的主事者。",
        "literalTranslation": "两军相持数年，只为争取一日的胜利，却吝惜爵位、俸禄和少量钱财，不肯用来获取敌情，这是极端不仁。这样的人，不配做军队的将帅，不配做君主的辅佐，也不是能够取胜的主事者。",
        "freeTranslation": "这句话强调：先建立不败条件，再等待或制造可胜窗口。",
        "coreMeaning": "先建立不败条件，再等待或制造可胜窗口。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要脱离“信息优势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
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
        "translation": "所以，明智的君主、贤能的将帅之所以一行动就能战胜别人，功业超过众人，是因为他们能预先知道敌情。",
        "literalTranslation": "所以，明智的君主、贤能的将帅之所以一行动就能战胜别人，功业超过众人，是因为他们能预先知道敌情。",
        "freeTranslation": "关键决策前要取得真实可靠的信息来源。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "不可取于",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "预先知道敌情，不能依靠鬼神，不能只靠类比推测，不能只靠星占历法验证，必须从人那里取得，也就是从了解敌情的人那里取得。",
        "literalTranslation": "预先知道敌情，不能依靠鬼神，不能只靠类比推测，不能只靠星占历法验证，必须从人那里取得，也就是从了解敌情的人那里取得。",
        "freeTranslation": "关键决策前要取得真实可靠的信息来源。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
        "translation": "所以，使用间谍有五种：因间、内间、反间、死间、生间。",
        "literalTranslation": "所以，使用间谍有五种：因间、内间、反间、死间、生间。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
        "original": "因间者，因其乡人而用之。",
        "words": [
          {
            "word": "因间者",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "因其乡人",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "而用之",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "因间，是利用敌国当地人做间谍。",
        "literalTranslation": "因间，是利用敌国当地人做间谍。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t19",
          "t26"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-7",
        "chapterId": "yong-jian",
        "order": 7,
        "original": "内间者，因其官人而用之。",
        "words": [
          {
            "word": "内间者",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "因其官人",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "而用之",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "内间，是利用敌国内部官员做间谍。",
        "literalTranslation": "内间，是利用敌国内部官员做间谍。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
        "original": "反间者，因其敌间而用之。",
        "words": [
          {
            "word": "反间",
            "explanation": "利用对方间谍反向取得信息或传递信息。",
            "modernMapping": "反向情报"
          },
          {
            "word": "反间者",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "因其敌间",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "反间，是利用敌方派来的间谍反过来为我所用。",
        "literalTranslation": "反间，是利用敌方派来的间谍反过来为我所用。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t21",
          "t28"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-9",
        "chapterId": "yong-jian",
        "order": 9,
        "original": "死间者，为诳事于外，令吾间知之，而传于敌间也。",
        "words": [
          {
            "word": "死间者",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "为诳事于",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "令吾间知",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "死间，是在外制造虚假情报，让我方间谍知道后传给敌方间谍；一旦真相败露，此间谍往往难以活命，所以叫死间。",
        "literalTranslation": "死间，是在外制造虚假情报，让我方间谍知道后传给敌方间谍；一旦真相败露，此间谍往往难以活命，所以叫死间。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t22",
          "t29"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-10",
        "chapterId": "yong-jian",
        "order": 10,
        "original": "生间者，反报也。",
        "words": [
          {
            "word": "生间",
            "explanation": "能够返回报告的间谍。",
            "modernMapping": "一手反馈"
          },
          {
            "word": "生间者",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "反报也",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "生间，是派出去后能够回来报告情报的间谍。",
        "literalTranslation": "生间，是派出去后能够回来报告情报的间谍。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
        "original": "故三军之事，莫亲于间，赏莫厚于间，事莫密于间。",
        "words": [
          {
            "word": "故三军之",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "莫亲于间",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "赏莫厚于",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "所以，军队事务中，没有比间谍更亲近机密的；赏赐没有比间谍更丰厚的；事情没有比间谍工作更秘密的。",
        "literalTranslation": "所以，军队事务中，没有比间谍更亲近机密的；赏赐没有比间谍更丰厚的；事情没有比间谍工作更秘密的。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
        "original": "非圣智不能用间，非仁义不能使间，非微妙不能得间之实。",
        "words": [
          {
            "word": "用间",
            "explanation": "使用间谍与情报网络。",
            "modernMapping": "情报体系"
          },
          {
            "word": "非圣智不",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "能用间",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "不是具有高明智慧的人，不能使用间谍；不是仁义而能得人心的人，不能指使间谍；不是精微细致的人，不能取得间谍情报的真实内容。",
        "literalTranslation": "不是具有高明智慧的人，不能使用间谍；不是仁义而能得人心的人，不能指使间谍；不是精微细致的人，不能取得间谍情报的真实内容。",
        "freeTranslation": "这句话强调：争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "coreMeaning": "争取主动权的办法，是避开坚实处，牵动对方必须响应的薄弱点。",
        "modernApplication": "小团队面对强对手时，选择对方服务不到、反应慢或必须保护的薄弱点切入，避免在主战场拼规模。",
        "misunderstanding": "不要把“击虚”理解成投机取巧；它要求准确识别对方真正薄弱且关键的节点。",
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
          "t25",
          "t02"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-13",
        "chapterId": "yong-jian",
        "order": 13,
        "original": "微哉微哉！无所不用间也。",
        "words": [
          {
            "word": "用间",
            "explanation": "使用间谍与情报网络。",
            "modernMapping": "情报体系"
          },
          {
            "word": "微哉微哉",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "无所不用",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "微妙啊，微妙啊！没有什么地方不能使用间谍。",
        "literalTranslation": "微妙啊，微妙啊！没有什么地方不能使用间谍。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t26",
          "t03"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-14",
        "chapterId": "yong-jian",
        "order": 14,
        "original": "间事未发，而先闻者，间与所告者皆死。",
        "words": [
          {
            "word": "间事未发",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "而先闻者",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "间与所告",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "间谍之事还没有发动，就已经泄露消息的，间谍和泄露者都要处死。",
        "literalTranslation": "间谍之事还没有发动，就已经泄露消息的，间谍和泄露者都要处死。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
        "translation": "凡是军队想要攻击的对象、城池想要攻取的对象、人物想要除掉的对象，必须先知道其守将、左右亲信、传达宾客、守门人、门客舍人的姓名，并命令我方间谍一定要搜索了解清楚。",
        "literalTranslation": "凡是军队想要攻击的对象、城池想要攻取的对象、人物想要除掉的对象，必须先知道其守将、左右亲信、传达宾客、守门人、门客舍人的姓名，并命令我方间谍一定要搜索了解清楚。",
        "freeTranslation": "关键决策前要取得真实可靠的信息来源。",
        "coreMeaning": "判断必须同时覆盖自身、对手和环境，缺一面都会造成误判。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t28",
          "t05"
        ],
        "quoteLevel": "classic"
      },
      {
        "id": "yong-jian-16",
        "chapterId": "yong-jian",
        "order": 16,
        "original": "必索敌人之间来间我者，因而利之，导而舍之，故反间可得而用也。",
        "words": [
          {
            "word": "反间",
            "explanation": "利用对方间谍反向取得信息或传递信息。",
            "modernMapping": "反向情报"
          },
          {
            "word": "必索敌人",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "之间来间",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "一定要查出敌人派来侦察我的间谍，然后用利益收买他，引导他、安置他，于是反间就可以被我使用。",
        "literalTranslation": "一定要查出敌人派来侦察我的间谍，然后用利益收买他，引导他、安置他，于是反间就可以被我使用。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t29",
          "t06"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-17",
        "chapterId": "yong-jian",
        "order": 17,
        "original": "因是而知之，故乡间、内间可得而使也。",
        "words": [
          {
            "word": "因是而知",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "故乡间",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "内间可得",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "通过反间取得情报，所以乡间、内间也可以使用。",
        "literalTranslation": "通过反间取得情报，所以乡间、内间也可以使用。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t30",
          "t07"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-18",
        "chapterId": "yong-jian",
        "order": 18,
        "original": "因是而知之，故死间为诳事，可使告敌。",
        "words": [
          {
            "word": "因是而知",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "故死间为",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "诳事",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "通过反间取得情报，所以死间制造的虚假信息可以让敌人相信。",
        "literalTranslation": "通过反间取得情报，所以死间制造的虚假信息可以让敌人相信。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t01",
          "t08"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-19",
        "chapterId": "yong-jian",
        "order": 19,
        "original": "因是而知之，故生间可使如期。",
        "words": [
          {
            "word": "生间",
            "explanation": "能够返回报告的间谍。",
            "modernMapping": "一手反馈"
          },
          {
            "word": "因是而知",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "故生间可",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "通过反间取得情报，所以生间也可以按预定计划回来报告。",
        "literalTranslation": "通过反间取得情报，所以生间也可以按预定计划回来报告。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t02",
          "t09"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-20",
        "chapterId": "yong-jian",
        "order": 20,
        "original": "五间之事，主必知之，知之必在于反间，故反间不可不厚也。",
        "words": [
          {
            "word": "反间",
            "explanation": "利用对方间谍反向取得信息或传递信息。",
            "modernMapping": "反向情报"
          },
          {
            "word": "五间之事",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "主必知之",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "五种间谍的运用，君主必须了解；而了解五间的关键在于反间，所以对反间不可不给予厚待。",
        "literalTranslation": "五种间谍的运用，君主必须了解；而了解五间的关键在于反间，所以对反间不可不给予厚待。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "调研、情报和用户反馈要来自真实一线，既要保护信息源，也要防止被错误信息反向影响。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t03",
          "t10"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-21",
        "chapterId": "yong-jian",
        "order": 21,
        "original": "昔殷之兴也，伊挚在夏；周之兴也，吕牙在殷。",
        "words": [
          {
            "word": "昔殷之兴",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "伊挚在夏",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "周之兴也",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "从前商朝兴起，是因为伊尹曾在夏朝了解情况；周朝兴起，是因为姜太公曾在殷商了解情况。",
        "literalTranslation": "从前商朝兴起，是因为伊尹曾在夏朝了解情况；周朝兴起，是因为姜太公曾在殷商了解情况。",
        "freeTranslation": "这句话强调：本句服务于“信息优势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“信息优势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“信息优势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t04",
          "t11"
        ],
        "quoteLevel": "normal"
      },
      {
        "id": "yong-jian-22",
        "chapterId": "yong-jian",
        "order": 22,
        "original": "故惟明君贤将，能以上智为间者，必成大功。",
        "words": [
          {
            "word": "将",
            "explanation": "负责人的智、信、仁、勇、严。",
            "modernMapping": "领导能力"
          },
          {
            "word": "故惟明君",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "贤将",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "所以，只有明智的君主、贤能的将帅，能够用最高智慧的人做间谍，才一定能成就大功。",
        "literalTranslation": "所以，只有明智的君主、贤能的将帅，能够用最高智慧的人做间谍，才一定能成就大功。",
        "freeTranslation": "这句话强调：可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "coreMeaning": "可靠情报要来自真实的人和现场，而不是迷信、猜测或空泛推演。",
        "modernApplication": "重大项目立项时，把目标共识、外部窗口、资源位置、负责人能力和流程制度逐项列清，缺一项就降低投入强度。",
        "misunderstanding": "不要把情报工作等同于猜测或窥私；现代应用应转化为合法合规的一线调研和事实核验。",
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
          "t05",
          "t12"
        ],
        "quoteLevel": "important"
      },
      {
        "id": "yong-jian-23",
        "chapterId": "yong-jian",
        "order": 23,
        "original": "此兵之要，三军之所恃而动也。",
        "words": [
          {
            "word": "此兵之要",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "三军之所",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          },
          {
            "word": "恃而动也",
            "explanation": "理解这个表达时，应结合“信息优势”的上下文，看它指向条件、代价还是行动顺序。",
            "modernMapping": "信息优势"
          }
        ],
        "translation": "这是用兵的关键，是三军行动所依靠的基础。",
        "literalTranslation": "这是用兵的关键，是三军行动所依靠的基础。",
        "freeTranslation": "这句话强调：本句服务于“信息优势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "coreMeaning": "本句服务于“信息优势”这一主题，重点是把判断条件落实到行动顺序，而不是停留在口号。",
        "modernApplication": "用于信息优势时，先把本句转成一个检查问题：目标、资源、风险、时机和执行条件是否已经被具体说明。",
        "misunderstanding": "不要脱离“信息优势”孤立引用本句；它更适合作为判断工具，而不是直接套用的结论。",
        "relatedConceptIds": [
          "zhi-ren-bu-zhi-yu-ren",
          "gong-qi-suo-bi-jiu"
        ],
        "relatedCaseIds": [
          "team-alignment",
          "architecture-pilot"
        ],
        "relatedTrainingIds": [
          "t06",
          "t13"
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
        "modernMapping": "组织共识、目标一致。",
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
