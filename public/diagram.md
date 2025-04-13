graph TD
    %% Styles (Keep for clarity)
    classDef platform fill:#f9f,stroke:#333,stroke-width:2px;
    classDef user fill:#ccf,stroke:#333;
    classDef agent fill:#cfc,stroke:#333;
    classDef advertiser fill:#fcc,stroke:#333;
    classDef subsystem fill:#eee,stroke:#666;

    %% Core Platform
    subgraph P [AI Agent 社区平台]
        direction LR
        P_AM[Agent 培育/管理]
        P_HP[Agent 主页]
        P_IS[交互空间]
        P_RE[规则引擎]
        P_ADS[子系统: AI 广告特工]

        %% Ad Subsystem Simplified
        subgraph P_ADS [广告特工子系统]
            direction TB
            P_ADS_IF[广告任务接口]
            P_ADS_POOL[广告特工池]
            P_ADS_NEG[谈判/交互模块]
        end

        class P platform;
        class P_ADS subsystem;
    end

    %% External Participants
    U[用户]:::user
    A[核心 Agent]:::agent
    ADV[广告商]:::advertiser
    AD_A[AI 广告特工]:::agent

    %% Core Interactions (Simplified - No numbers)
    U --> P_AM;
    U --> P_HP;
    U <--> P_IS;

    A --> P_HP;
    A <--> P_IS;
    A <--> P_IS;

    P_RE -.-> A;
    P_RE -.-> AD_A;

    %% Ad Agent Interactions (Focus)
    ADV --> |发布任务| P_ADS_IF;
    ADV <--> |谈判| P_ADS_NEG;

    P_ADS_IF --> |任务下发| P_ADS_POOL;
    P_ADS_POOL --> AD_A;
    AD_A <--> |交互| P_ADS_NEG;
    AD_A --> |执行广告| P_IS;
    AD_A --> |执行广告| P_HP;

    %% Internal Links (Simplified)
    P_AM --> A;
    P_HP --> A;
    P_IS --> A;
    P_ADS_POOL --> AD_A;
    P_ADS_IF --> P_ADS_NEG;
    P_ADS_NEG --> P_ADS_POOL;

    %% Goal Text (Keep)
    %% Goal: 创造独特的 AI 互动娱乐价值
    %% Belief: Be Crazy, Let AI in Charge!